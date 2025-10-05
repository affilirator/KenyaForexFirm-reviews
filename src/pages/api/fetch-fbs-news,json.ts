export const prerender = false;
import type { APIRoute } from 'astro';
import { load } from 'cheerio';

export const GET: APIRoute = async () => {
  try {
    const response = await fetch('https://fbs.com/news/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; AstroBot/1.0)', // Mimic browser to avoid blocks
      },
    });

    if (!response.ok) {
      throw new Error(`Fetch failed: ${response.status}`);
    }

    const html = await response.text();
    const $ = load(html);

    // Selectors based on FBS's structure (inspect via browser dev tools to confirm/adjust)
    // Common: Articles in `.news-item`, `.article-card`, or `article` tags
    const articles: Array<{
      title: string;
      url: string;
      date: string;
      excerpt: string;
      image?: string;
    }> = [];

    // Example selector: Adjust after inspecting (e.g., $('article .news-card') or $('.news-list > li'))
    $('article, .news-item, .post-card')
      .slice(0, 10)
      .each((_, elem) => {
        // Limit to 10 recent
        const $elem = $(elem);
        const titleElem = $elem.find('h2 a, h3 a, .title a').first();
        const title = titleElem.text().trim();
        const url = titleElem.attr('href');
        if (!title || !url) return;

        const fullUrl = url.startsWith('http') ? url : `https://fbs.com${url}`;
        const date = $elem.find('time, .date').first().text().trim() || 'N/A';
        const excerpt =
          $elem
            .find('p.excerpt, .summary')
            .first()
            .text()
            .trim()
            .slice(0, 150) + '...';
        const image = $elem.find('img').first().attr('src') || undefined;

        articles.push({ title, url: fullUrl, date, excerpt, image });
      });

    return new Response(
      JSON.stringify({ articles, updated: new Date().toISOString() }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600',
        }, // Cache 1 hour
      }
    );
  } catch (error) {
    console.error('News fetch error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch news' }), {
      status: 500,
    });
  }
};
