'use server'
// lib/payload.ts
import { getPayloadClient } from '@/payload/get-payload';

import type { SiteConfig, TradingSession, Broker, TradersGlobal, ForexTrader, TradingStrategy, Page, ForexInstrument } from '@/payload-types';
import { redirect } from 'next/navigation';

const API_URL = process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000';
const payload = await getPayloadClient();

// Helper function for fetching data
async function fetchData<T>(path: string, params: URLSearchParams): Promise<T> {
  const url = `${API_URL}${path}?${params}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch data: ${res.statusText}`);
  return res.json();
}

export async function fetchTraders(): Promise<ForexTrader[]> {
  const traders = await payload.find({
    collection: 'forex-traders',
    depth: 2,
    limit: 100,
    //where: {country: {equals: 'Kenya'}}
  })
  if (traders.docs.length === 0) {
    redirect('https://fx.mahinge.com');
  }
  /*else {
    traders.docs.sort((a: ForexTrader, b: ForexTrader) => {
      const aName = a.name.toLowerCase();
      const bName = b.name.toLowerCase();
      if (aName < bName) return -1;
      if (aName > bName) return 1;
      return 0;
    });

  }
    */
  return traders.docs;
  
}

export async function fetchTraderBySlug(slug: string): Promise<ForexTrader> {
  if (!slug) throw new Error('No slug provided');
  if (typeof slug !== 'string') throw new Error('Slug must be a string');
  if (slug.length === 0) throw new Error('Slug cannot be empty');
  if (slug.length > 100) throw new Error('Slug cannot be longer than 100 characters');
  if (slug.match(/[^a-z0-9-]/)) throw new Error('Slug must contain only lowercase letters, numbers, and hyphens');

  const trader = await payload.find({
    collection: 'forex-traders',
    where: { slug: { equals: slug } },
    depth: 2,
    limit: 1,
  });
  if (trader.docs.length === 0) {
    throw new Error('No trader found');
  }
  return trader.docs[0];
  
  
}

export async function fetchPageBySlug(slug: string): Promise<Page> {
  const pages = await fetch('https://fx.mahinge.com/api/pages')
  if (pages.docs.length === 0) {
    throw new Error('No pages found');
  }
  return pages.docs[0];
}

export async function fetchAssetClasses(): Promise<ForexInstrument[]> {
  const assets = await payload.find({
    collection: 'forex-instruments',
    where: { isAssetClass: { equals: true } },
    depth: 1,
    limit: 100,
  });
  if (assets.docs.length === 0) {
    throw new Error('No pages found');
  }
  return assets.docs;
}

export async function fetchForexInstruments(): Promise<ForexInstrument[]> {
  const assets = await payload.find({
    collection: 'forex-instruments',
    where: { isAssetClass: { equals: false } },
    depth: 1,
    limit: 100,
  });
  if (assets.docs.length === 0) {
    throw new Error('No pages found');
  }
  return assets.docs;
}

export async function fetchTradersGlobal(): Promise<TradersGlobal> {
  const content = await payload.findGlobal({
    slug: 'traders-global',
    depth: 1,
  });
  if (!content) {
    throw new Error('No traders global content found');
  }
  return content;
  
}

export async function fetchTradingStyle(): Promise<TradingStrategy[]> {
  const tradingStyles = await payload.find({
    collection: 'trading-strategies',
    where: { isStyle: { equals: true } },
    depth: 2,
    limit: 100,
  });
  if (tradingStyles.docs.length === 0) {
    throw new Error('No strategies found');
  }
  return tradingStyles.docs;
}

export async function fetchStrategies(): Promise<TradingStrategy[]> {
  const fxStrategies = await payload.find({
    collection: 'trading-strategies',
    where: { isStyle: { equals: false } },
    depth: 2,
    limit: 100,
  });
  if (fxStrategies.docs.length === 0) {
    throw new Error('No strategies found');
  }
  return fxStrategies.docs;
}

export async function fetchSiteConfig(): Promise<SiteConfig> {
  const siteConfig = await fetch('https://fx.mahinge.com/api/globals/site-config');
  if (!siteConfig) {
    throw new Error('No site config found');
  }
  return siteConfig;
}




export async function fetchTradingSessions(): Promise<TradingSession[]> {
  const sessions = await payload.find({
    collection: 'trading-sessions',
    depth: 1,
    limit: 100,
  });
  if (sessions.docs.length === 0) {
    throw new Error('No trading sessions found');
  }
  return sessions.docs;
  
}

export async function fetchBrokers(options = {}): Promise<{ docs: Broker[] }> {
  const fxBrokers = await payload.find({
    collection: 'brokers',
    depth: 1,
    limit: 100,
    ...options,
  });
  if (fxBrokers.docs.length === 0) {
    throw new Error('No brokers found');
  }
  return fxBrokers;
  
}

export async function fetchBrokerBySlug(slug: string): Promise<Broker> {
  const fxBrokers = await payload.find({
    collection: 'brokers',
    where: { slug: { equals: slug } },
    depth: 2,
    limit: 1,
  });
  if (fxBrokers.docs.length === 0) {
    throw new Error('No broker found');
  }
  return fxBrokers.docs[0];
}