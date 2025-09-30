import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { site } from '~/data/site';
import { getReviews, getAllFundingMethods } from '~/lib/qs-esm';

export const GET: APIRoute = async (context) => {
  // Fetch broker reviews
  const { docs: brokers } = await getReviews();

  // Fetch funding methods for dynamic pages
  const fundingMethods = await getAllFundingMethods();

  // Static pages in the best-forex-brokers section
  const staticPages = [
    {
      title: `Top 10 Forex Brokers in Kenya: Your Blueprint for Profitable Trading`,
      link: '/review/best-forex-brokers/',
      description: `Discover Kenya's top forex brokers for ${new Date().getFullYear()}! Our in-depth guide ranks regulated platforms by spreads, features, Mpesa integration & safety. Find your ideal broker today.`,
      pubDate: new Date(),
    },
    {
      title: `CMA-Regulated Forex Brokers ${new Date().getFullYear()} - Kenya`,
      link: '/review/best-forex-brokers/cma-regulated/',
      description:
        'Discover CMA approved forex brokers in Kenya. Trade safely with Capital Markets Authority licensed brokers offering secure trading for Kenyan investors.',
      pubDate: new Date(),
    },
    {
      title: 'High Leverage Forex Brokers in Kenya',
      link: '/review/best-forex-brokers/high-leverage/',
      description:
        'Find the best high leverage forex brokers available to Kenyan traders. Compare maximum leverage ratios and trading conditions.',
      pubDate: new Date(),
    },
    {
      title: 'Most Regulated Forex Brokers in Kenya',
      link: '/review/best-forex-brokers/most-regulated/',
      description:
        'Explore the most regulated forex brokers operating in Kenya with multiple regulatory licenses for enhanced trader protection.',
      pubDate: new Date(),
    },
    {
      title: 'Best Forex Brokers That Accept Mpesa in Kenya',
      link: '/review/best-forex-brokers/mpesa/',
      description:
        'Discover forex brokers that accept Mpesa payments for deposits and withdrawals in Kenya.',
      pubDate: new Date(),
    },
    {
      title: 'Compare Forex Brokers in Kenya',
      link: '/review/best-forex-brokers/compare/',
      description:
        'Compare top forex brokers side by side. Analyze spreads, regulations, features, and more.',
      pubDate: new Date(),
    },
  ];

  // Generate RSS feed items
  const items = [
    // Add static pages
    ...staticPages.map((page) => ({
      title: page.title,
      link: `${site.url}${page.link}`,
      description: page.description,
      pubDate: page.pubDate,
      categories: ['Forex Brokers', 'Kenya'],
    })),

    // Add individual broker reviews
    ...brokers.map((broker) => ({
      title: `${broker.brokerName} Review - Forex Broker in Kenya`,
      link: `${site.url}/review/${broker.slug}/`,
      description:
        broker.description ||
        `Comprehensive review of ${broker.brokerName}. Regulation, spreads, platforms, and features for Kenyan traders.`,
      pubDate: broker.updatedAt ? new Date(broker.updatedAt) : new Date(),
      categories: ['Forex Brokers', 'Kenya', 'Broker Review'],
      author: site.address.email,
    })),

    // Add payment method pages
    ...fundingMethods.docs.map((method) => ({
      title: `Best Forex Brokers That Accept ${method.title || method.name} in Kenya (${new Date().getFullYear()})`,
      link: `${site.url}/review/best-forex-brokers/${method.slug}/`,
      description:
        method.description ||
        `Find top forex brokers accepting ${method.title || method.name} payments in Kenya.`,
      pubDate: new Date(),
      categories: ['Forex Brokers', 'Kenya', 'Payment Methods'],
    })),
  ];

  return rss({
    title: `${site.name} - Best Forex Brokers in Kenya`,
    description: site.description,
    site: context.site?.toString() || site.url,
    items: items,
    customData: `<language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>${site.address.email} (Kenya Forex Firm)</managingEditor>
    <webMaster>${site.address.email} (Kenya Forex Firm)</webMaster>`,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
    stylesheet: '/rss-styles.xsl',
  });
};
