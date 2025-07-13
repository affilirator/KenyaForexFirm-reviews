import { stringify } from 'qs-esm';
import type { BrokerProps } from '../types';

const PAYLOAD_API_URL = "https://api.kenyaforexfirm.com";

const queryConfig = {
  select: {
    content: false,
    blog: false
  },
  where: {
    status: { equals: 'published' }
  },
  depth: 3,
  sort: '-brokerRating'
};

export const getReviews = async (): Promise<{ docs: BrokerProps[] }> => {
  try {
    const queryString = stringify(queryConfig, { addQueryPrefix: true });
    const response = await fetch(`${PAYLOAD_API_URL}/api/broker-reviews${queryString}`);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch reviews:', error);
    return { docs: [] };
  }
};
