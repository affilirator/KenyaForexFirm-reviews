/**
 * Data fetching module for regulator pages
 */
import { fetchRegulatorPage } from './api';
import { formatRegulatorData } from './regulatorUtils';
import type { RegulatorPage } from '../types/regulator';

// Cache for regulator data to avoid redundant API calls
const regulatorCache = new Map<string, { data: RegulatorPage; timestamp: number }>();
const CACHE_TTL = 1000 * 60 * 5; // 5 minutes

/**
 * Get regulator data with caching
 */
export async function getRegulatorData(slug: string): Promise<RegulatorPage | null> {
  try {
    // Check cache first
    const now = Date.now();
    const cached = regulatorCache.get(slug);
    
    if (cached && now - cached.timestamp < CACHE_TTL) {
      return cached.data;
    }
    
    // Fetch fresh data
    const data = await fetchRegulatorPage(slug);
    const formattedData = formatRegulatorData(data);
    
    // Update cache
    regulatorCache.set(slug, { data: formattedData, timestamp: now });
    
    return formattedData;
  } catch (error) {
    console.error(`Error fetching regulator data for ${slug}:`, error);
    return null;
  }
}

/**
 * Get all available regulator slugs
 * In a real implementation, this would fetch from an API endpoint
 */
export async function getAllRegulatorSlugs(): Promise<string[]> {
  // This would typically be an API call to get all slugs
  // For now, we'll return a static list
  return [
    'asic-regulation',
    // Add more regulator slugs as they become available
  ];
}