// src/utils/cachedFetch.ts
export async function cachedFetch(url: string, cacheTTL = 3600) {
  // Default 1 hour TTL
  const cache = caches.default; // Cloudflare Workers Cache API
  let response = await cache.match(url);

  if (!response) {
    response = await fetch(url);

    if (response.ok) {
      // Clone response before caching (streams can only be read once)
      const cachedResponse = response.clone();
      // Add Cache-Control header for edge caching
      const headers = new Headers(cachedResponse.headers);
      headers.set('Cache-Control', `public, max-age=${cacheTTL}`);

      // Custom vary header if needed (e.g., for locale)
      // headers.set('Vary', 'Accept-Language');

      await cache.put(
        url,
        new Response(cachedResponse.body, {
          headers,
          status: cachedResponse.status,
          statusText: cachedResponse.statusText,
        })
      );
    }
  }

  return response.json();
}
