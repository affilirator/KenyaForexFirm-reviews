/**
 * Utility for fetching regulator global data
 */
import type { AsicRegulationGlobal } from '../types/asicRegulation';

const API_BASE_URL = 'https://api.kenyaforexfirm.com/api';

/**
 * List of all available regulator globals
 */
export const REGULATOR_GLOBALS = [
  { slug: 'asic-regulation', name: 'ASIC', country: 'Australia' },
  { slug: 'fca-regulation', name: 'FCA', country: 'United Kingdom' },
  { slug: 'cysec-regulation', name: 'CySEC', country: 'Cyprus' },
  { slug: 'fsca-regulation', name: 'FSCA', country: 'South Africa' },
  { slug: 'cma-regulation', name: 'CMA', country: 'Kenya' },
  { slug: 'jfsa-regulation', name: 'JFSA', country: 'Japan' },
  { slug: 'mas-regulation', name: 'MAS', country: 'Singapore' },
  { slug: 'bafin-regulation', name: 'BaFin', country: 'Germany' },
  { slug: 'finma-regulation', name: 'FINMA', country: 'Switzerland' },
  { slug: 'nfa-regulation', name: 'NFA/CFTC', country: 'United States' }
];

/**
 * Fetch regulator global data by slug
 */
export async function fetchRegulatorGlobal(slug: string): Promise<AsicRegulationGlobal> {
  try {
    // Increased depth parameter to ensure nested content is included
    const response = await fetch(`${API_BASE_URL}/globals/${slug}?depth=3`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch regulator data: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching regulator data for ${slug}:`, error);
    throw error;
  }
}