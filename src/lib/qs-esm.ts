import { stringify } from 'qs-esm';
import type { BrokerProps } from '../types';
import type { FundingMethod, FundingMethodsResponse } from '~/types/funding-methods';

const PAYLOAD_API_URL = "https://api.kenyaforexfirm.com";

const queryConfig = {
  select: {
    content: false,
    blog: false
  },
  where: {
    status: { equals: 'published' }
  },
  depth: 2,
  sort: '-brokerRating'
};

// A more complex query object
const queryObject = {
  where: {
    // The top-level 'and' means all conditions inside this array must be true
    and: [
      {
        // First condition: The post must have more than 50 likes.
        likeCount: {
          greater_than: 50,
        },
      },
      {
        // Second condition: This condition contains a nested 'or'.
        // This means at least one of the conditions inside the 'or' array must be true.
        or: [
          {
            status: {
              equals: 'published',
            },
          },
          {
            status: {
              equals: 'archived',
            },
          },
        ],
      },
    ],
  },
  limit: 20, // Let's get up to 20 matching documents
};

const mpesaQuery = {
  select: {
    content: false,
    blog: false
  },
  where: {
    and: [
      
      { status: { equals: 'published' } },
      {
        or: [
          { brokerPaymentMethods: { contains: '"mPesa"' } },
          { acceptsMpesa: { equals: true } },
          
        ]
      }

    ]
    
  },
  depth: 2,
  sort: '-brokerRating'
};

const fundingQuery = {
  select: {
    content: false,
    blog: false
  },
  where: {
    and: [
      
      { status: { equals: 'published' } },
      {
        or: [
          { brokerPaymentMethods: { contains: '"mPesa"' } },
          { acceptsMpesa: { equals: true } },
          
        ]
      }

    ]
    
  },
  depth: 2,
  sort: '-brokerRating'
};

export const getMpesaForexBrokers = async (): Promise<{ docs: BrokerProps[] }> => {
  try {
    const queryString = stringify(mpesaQuery, { addQueryPrefix: true });
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

export const getFundingMethodBySlug = async (slug: string): Promise<FundingMethodsResponse | null> => {
  try {
    const queryString = stringify({
      where: {
        slug: { equals: slug },
        status: { equals: 'published' }
      },
      depth: 3
    }, { addQueryPrefix: true });
    
    const response = await fetch(`${PAYLOAD_API_URL}/api/funding-methods${queryString}`);
    
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

export const getAllFundingMethods = async (): Promise<FundingMethodsResponse> => {
  try {
    const queryString = stringify({
      
      depth: 2,
      sort: 'name'
    }, { addQueryPrefix: true });
    
    const response = await fetch(`${PAYLOAD_API_URL}/api/funding-methods${queryString}`);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch funding methods:', error);
    return { docs: [], totalDocs: 0, limit: 0, totalPages: 0, page: 1, pagingCounter: 1, hasPrevPage: false, hasNextPage: false, prevPage: null, nextPage: null };
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