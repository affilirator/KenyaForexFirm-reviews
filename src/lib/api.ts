/**
 * API utilities for fetching data from the Payload CMS API
 */

const API_BASE_URL = 'https://api.kenyaforexfirm.com/api';

/**
 * Fetch a global regulator page by slug
 * @param slug - The slug of the regulator page
 * @returns The regulator page data
 */
export async function fetchRegulatorPage(slug: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/globals/${slug}?depth=1`, {
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
