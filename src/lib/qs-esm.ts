import { stringify } from 'qs-esm';
import type { BrokerProps } from '../types';
import type {
  FundingMethod,
  FundingMethodsResponse,
} from '~/types/funding-methods';
import type {
  ForexTrader,
  SiteConfig,
  TradersGlobal,
} from '~/types/payload-types';

const PAYLOAD_API_URL = 'https://api.kenyaforexfirm.com';

const queryConfig = {
  select: {
    content: false,
    blog: false,
  },
  where: {
    status: { equals: 'published' },
  },
  depth: 2,
  sort: '-brokerRating',
  //locale: 'en',
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
    blog: false,
  },
  where: {
    and: [
      { status: { equals: 'published' } },
      {
        or: [
          { brokerPaymentMethods: { contains: '"mPesa"' } },
          { acceptsMpesa: { equals: true } },
        ],
      },
    ],
  },
  depth: 2,
  sort: '-brokerRating',
};

const fundingQuery = {
  select: {
    content: false,
    blog: false,
  },
  where: {
    and: [
      { status: { equals: 'published' } },
      {
        or: [
          { brokerPaymentMethods: { contains: '"mPesa"' } },
          { acceptsMpesa: { equals: true } },
        ],
      },
    ],
  },
  depth: 2,
  sort: '-brokerRating',
};

export async function fetchTraderBySlug(slug: string): Promise<ForexTrader> {
  const queryString = stringify(
    {
      where: {
        slug: { equals: slug },
        //status: { equals: 'published' }
      },
      depth: 3,
    },
    { addQueryPrefix: true }
  );
  if (!slug) throw new Error('No slug provided');
  if (typeof slug !== 'string') throw new Error('Slug must be a string');
  if (slug.length === 0) throw new Error('Slug cannot be empty');
  if (slug.length > 100)
    throw new Error('Slug cannot be longer than 100 characters');
  if (slug.match(/[^a-z0-9-]/))
    throw new Error(
      'Slug must contain only lowercase letters, numbers, and hyphens'
    );

  const res = await fetch(
    `https://fx.mahinge.com/api/forex-traders${queryString}`
  );
  const trader = await res.json();

  /* await payload.find({
    collection: 'forex-traders',
    where: { slug: { equals: slug } },
    depth: 2,
    limit: 1,
  });
  */

  if (trader.docs.length === 0) {
    throw new Error('No trader found');
  }
  return trader.docs[0];
}

export const getMpesaForexBrokers = async (): Promise<{
  docs: BrokerProps[];
}> => {
  try {
    const queryString = stringify(mpesaQuery, { addQueryPrefix: true });
    const response = await fetch(
      `${PAYLOAD_API_URL}/api/broker-reviews${queryString}`
    );

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
    const response = await fetch(
      `${PAYLOAD_API_URL}/api/broker-reviews${queryString}`
    );

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch reviews:', error);
    return { docs: [] };
  }
};
export const getReviewById = async (
  id: string
): Promise<BrokerProps | null> => {
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
export const getReviewBySlug = async (
  slug: string
): Promise<BrokerProps | null> => {
  try {
    const queryString = stringify(
      {
        where: {
          slug: { equals: slug },
          status: { equals: 'published' },
        },
        depth: 3,
      },
      { addQueryPrefix: true }
    );

    const response = await fetch(
      `${PAYLOAD_API_URL}/api/broker-reviews${queryString}`
    );

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

export async function fetchSiteConfig(): Promise<SiteConfig> {
  const res = await fetch('https://fx.mahinge.com/api/globals/site-config');
  const siteConfig = await res.json();
  if (!siteConfig) {
    throw new Error('No site config found');
  }
  return siteConfig;
}

export async function fetchTradersGlobal(): Promise<TradersGlobal> {
  const res = await fetch('https://fx.mahinge.com/api/globals/traders-global');

  const tradersGlobal = await res.json();
  //const content = data.content
  if (!tradersGlobal) {
    console.warn('No content found for that page');
  }
  return tradersGlobal;
}

export async function fetchTraders(): Promise<ForexTrader[]> {
  const res = await fetch('https://fx.mahinge.com/api/forex-traders');
  const traders = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch traders');
  }

  //const traders = data.docs
  // Assuming the API returns an object with a 'docs' array

  // Sort traders alphabetically by name

  if (traders.docs.length === 0) {
    console.warn('No traders found');
    //redirect('https://fx.mahinge.com');
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

export const getFundingMethodBySlug = async (
  slug: string
): Promise<FundingMethod | null> => {
  try {
    const queryString = stringify(
      {
        where: {
          slug: { equals: slug },
          status: { equals: 'published' },
        },
        depth: 3,
      },
      { addQueryPrefix: true }
    );

    const response = await fetch(
      `${PAYLOAD_API_URL}/api/funding-methods${queryString}`
    );

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

export const getAllFundingMethods =
  async (): Promise<FundingMethodsResponse> => {
    try {
      const queryString = stringify(
        {
          depth: 3,
          sort: 'name',
        },
        { addQueryPrefix: true }
      );

      const response = await fetch(
        `${PAYLOAD_API_URL}/api/funding-methods${queryString}`
      );

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Failed to fetch funding methods:', error);
      return {
        docs: [],
        totalDocs: 0,
        limit: 0,
        totalPages: 0,
        page: 1,
        pagingCounter: 1,
        hasPrevPage: false,
        hasNextPage: false,
        prevPage: null,
        nextPage: null,
      };
    }
  };

export const getHighLeverageBrokers = async (): Promise<{
  docs: BrokerProps[];
}> => {
  try {
    const allBrokers = await getReviews();
    const notCmaregulated = allBrokers.docs.filter(
      (broker) => !broker.cmaRegulated
    );
    const highLeverageBrokers = allBrokers.docs.filter((broker) => {
      // Extract the leverage value from maxLeverage (format: "1:XXX")
      const leverageValue = broker.maxLeverage
        ? parseInt(broker.maxLeverage.split(':')[1])
        : 0;
      //const Combined = notCmaregulated.concat(highLeverageBrokers);
      return leverageValue > 400;
    });

    return { docs: highLeverageBrokers };
  } catch (error) {
    console.error('Failed to fetch high leverage brokers:', error);
    return { docs: [] };
  }
};
