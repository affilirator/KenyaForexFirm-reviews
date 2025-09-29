import type { RegulatorResponse, Regulator } from '../types/regulator';

const PAYLOAD_API_URL = 'https://api.kenyaforexfirm.com';

export const getRegulators = async (): Promise<RegulatorResponse> => {
  try {
    const response = await fetch(`${PAYLOAD_API_URL}/api/regulators`);

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch regulators:', error);
    return {
      docs: [],
      totalDocs: 0,
      limit: 0,
      totalPages: 0,
      page: 0,
      pagingCounter: 0,
      hasPrevPage: false,
      hasNextPage: false,
      prevPage: null,
      nextPage: null,
    };
  }
};

export const getRegulatorBySlug = async (
  slug: string
): Promise<Regulator | null> => {
  try {
    const response = await fetch(
      `${PAYLOAD_API_URL}/api/regulators?where[slug][equals]=${slug}`
    );

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    return data.docs?.[0] || null;
  } catch (error) {
    console.error(`Failed to fetch regulator with slug ${slug}:`, error);
    return null;
  }
};
