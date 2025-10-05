// src/scripts/fetch-fbs-news.ts
import axios from 'axios';
import * as cheerio from 'cheerio';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

interface NewsItem {
  title: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
  url: string;
}

async function fetchFbsNews(): Promise<NewsItem[]> {
  try {
    const response = await axios.get('https://fbs.com/news/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; AstroBot/1.0)',  // Mimic a browser to avoid blocks
      },
    });
    const $ = cheerio.load(response.data);

    const articles: NewsItem[] = [];
    // Adjust selectors based on FBS's HTML structure (inspect https://fbs.com/news/ in browser dev tools)
    // Common pattern: articles in .news-list > article or similar; title in h2/a, date in time, excerpt in p, image in img
    $('.news-item, article, .post-card').each((i, elem) => {
      if (i >= 10) return;  // Limit to top 10

      const title = $(elem).find('h2 a, .title a').first().text().trim() || '';
      const url = $(elem).find('h2 a, .title a').first().attr('href') || '';
      const fullUrl = url.startsWith('http') ? url : `https://fbs.com${url}`;
      const date = $(elem).find('time, .date').first().text().trim() || '';
      const excerpt = $(elem).find('p.excerpt, .summary').first().text().trim() || '';
      const imageUrl = $(elem).find('img').first().attr('src') || '';

      if (title && url) {
        articles.push({ title, date, excerpt, imageUrl, url: fullUrl });
      }
    });

    // Save as JSON for use in Astro pages
    const outputPath = resolve('src/data/fbs-news.json');
    writeFileSync(outputPath, JSON.stringify(articles, null, 2));
    console.log(`Fetched ${articles.length} FBS news items to ${outputPath}`);
    return articles;
  } catch (error) {
    console.error('Error fetching FBS news:', error);
    return [];
  }
}

// Run during build (call this in astro.config.mjs or a build hook)
fetchFbsNews();