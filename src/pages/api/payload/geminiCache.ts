/**
 * Env Interface
 */
interface Env {
  PAYLOAD_API_URL: string;
  PAYLOAD_API_KEY: string;
  PURGE_SECRET: string; // New: Secret for webhook authentication
  REVALIDATE_AFTER: string;
  CACHE_RETENTION_TTL: string;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const url = new URL(request.url);

    // 1. Handle Preflight / CORS
    if (request.method === 'OPTIONS') return handleOptions(request);

    // 2. PURGE ROUTE (New)
    // Listens for POST requests on /purge-cache
    if (url.pathname === '/purge-cache' && request.method === 'POST') {
      return handlePurge(request, env);
    }

    // 3. Standard Get Request (SWR Logic)
    if (request.method !== 'GET')
      return new Response('Method Not Allowed', { status: 405 });

    const cache = caches.default;
    // Normalize key: sort params or strip them if your API is position-independent
    const cacheKey = new Request(url.toString(), request);

    try {
      const cachedResponse = await cache.match(cacheKey);

      if (cachedResponse) {
        // --- SWR LOGIC (Existing) ---
        const cachedTime = cachedResponse.headers.get('X-Swr-Timestamp');
        const ageInSeconds = cachedTime
          ? (Date.now() - parseInt(cachedTime)) / 1000
          : 0;
        const revalidateLimit = parseInt(env.REVALIDATE_AFTER) || 60;

        const clientResponse = new Response(
          cachedResponse.body,
          cachedResponse
        );

        if (ageInSeconds > revalidateLimit) {
          console.log(`[SWR] Stale (${ageInSeconds}s). Revalidating.`);
          clientResponse.headers.set('X-Worker-Cache', 'STALE');
          ctx.waitUntil(fetchAndCache(request, env, null, cacheKey));
        } else {
          clientResponse.headers.set('X-Worker-Cache', 'HIT');
        }
        return clientResponse;
      }

      console.log('[SWR] Miss. Fetching upstream.');
      return await fetchAndCache(request, env, ctx, cacheKey);
    } catch (err) {
      console.error(`Worker Error: ${(err as Error).message}`);
      return new Response(JSON.stringify({ error: 'Internal Edge Error' }), {
        status: 500,
      });
    }
  },
};

/**
 * Handle Purge Requests
 * Expects JSON body: { "paths": ["/api/globals/header", "/api/pages/home"] }
 */
async function handlePurge(request: Request, env: Env): Promise<Response> {
  // 1. Security Check
  const authHeader = request.headers.get('Authorization');
  if (authHeader !== `Bearer ${env.PURGE_SECRET}`) {
    return new Response('Unauthorized', { status: 401 });
  }

  try {
    const body: { paths: string[] } = await request.json();

    if (!body.paths || !Array.isArray(body.paths)) {
      return new Response('Invalid body. Expected { paths: [] }', {
        status: 400,
      });
    }

    const cache = caches.default;
    const deleted: string[] = [];
    const failed: string[] = [];

    // 2. Iterate and Delete
    // Cloudflare Cache Delete requires the EXACT URL used to store the item.
    const workerOrigin = new URL(request.url).origin;

    const deletePromises = body.paths.map(async (path) => {
      // Construct the full URL that was used as the cache key
      // Ensure path starts with /
      const cleanPath = path.startsWith('/') ? path : `/${path}`;
      const cacheKeyUrl = `${workerOrigin}${cleanPath}`;

      // Attempt deletion
      const success = await cache.delete(cacheKeyUrl);
      if (success) deleted.push(cleanPath);
      else failed.push(cleanPath);
    });

    await Promise.all(deletePromises);

    return new Response(
      JSON.stringify({
        status: 'success',
        deleted,
        failed_or_not_found: failed,
      }),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (e) {
    return new Response(`Purge Error: ${(e as Error).message}`, {
      status: 500,
    });
  }
}

// ... (fetchAndCache and handleOptions remain the same as previous step) ...
// (I will not repeat them to save space, but ensure they are included in your file)
async function fetchAndCache(
  req: Request,
  env: Env,
  ctx: ExecutionContext | null,
  key: Request
) {
  /* ...same as before... */ return new Response();
}
function handleOptions(req: Request) {
  /* ...same as before... */ return new Response();
}
