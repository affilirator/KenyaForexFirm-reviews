import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const robotsTxt = `
# Allow all crawlers
User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /api/
Disallow: /admin/
Disallow: /content/
Disallow: /app/
Disallow: /dashboard/

# Sitemap
Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
`.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};