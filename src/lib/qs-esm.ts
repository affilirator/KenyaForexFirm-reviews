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
export const getReviewById = async (id: string): Promise<BrokerProps | null> => {
  try {
    const response = await fetch(`${PAYLOAD_API_URL}/api/broker-reviews/${id}`);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch review with ID ${id}:`, error);
    return null;
  }
};
export const getReviewBySlug = async (slug: string): Promise<BrokerProps | null> => {
  try {
    const queryString = stringify({
      where: {
        slug: { equals: slug },
        status: { equals: 'published' }
      },
      depth: 3
    }, { addQueryPrefix: true });
    
    const response = await fetch(`${PAYLOAD_API_URL}/api/broker-reviews${queryString}`);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    
    const data = await response.json();
    return data.docs?.[0] || null;
  } catch (error) {
    console.error(`Failed to fetch review with slug ${slug}:`, error);
    return null;
  }
};

export const getHighLeverageBrokers = async (): Promise<{ docs: BrokerProps[] }> => {
  try {
    const allBrokers = await getReviews();
    const highLeverageBrokers = allBrokers.docs.filter(broker => {
      // Extract the leverage value from maxLeverage (format: "1:XXX")
      const leverageValue = broker.maxLeverage ? parseInt(broker.maxLeverage.split(':')[1]) : 0;
      return leverageValue > 400;
    });
    
    return { docs: highLeverageBrokers };
  } catch (error) {
    console.error('Failed to fetch high leverage brokers:', error);
    return { docs: [] };
  }
};