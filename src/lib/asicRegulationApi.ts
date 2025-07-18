/**
 * API utility for fetching ASIC regulation global data
 */
import type { AsicRegulationGlobal } from '../types/asicRegulation';

const API_BASE_URL = 'https://api.kenyaforexfirm.com/api';

/**
 * Fetch ASIC regulation global data
 */
export async function fetchAsicRegulation(): Promise<AsicRegulationGlobal> {
  try {
    const response = await fetch(`${API_BASE_URL}/globals/asic-regulation?depth=1`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ASIC regulation data: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching ASIC regulation data:', error);
    throw error;
  }
}