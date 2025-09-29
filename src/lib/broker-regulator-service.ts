/**
 * Service to fetch brokers by regulator website
 */
import type { BrokerReviewsResponse } from '../types/broker-reviews';
import {
  extractDomain,
  normalizeRegulatorName,
  areRegulatorNamesSimilar,
} from '../utils/regulatorUtils';

const API_BASE_URL = 'https://api.kenyaforexfirm.com/api';

/**
 * Fetch brokers by regulator website
 *
 * @param website The regulator's website
 * @param limit The maximum number of brokers to return
 * @returns Promise with broker reviews response
 */
export async function getBrokersByRegulatorWebsite(
  website: string,
  limit: number = 5
): Promise<BrokerReviewsResponse> {
  try {
    // Build query parameters
    const params = new URLSearchParams({
      limit: '20', // Fetch more to filter
      sort: '-brokerRating', // Sort by rating in descending order
    });

    const response = await fetch(`${API_BASE_URL}/broker-reviews?${params}`);

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const allBrokers = (await response.json()) as BrokerReviewsResponse;

    // Extract domain from website for more flexible matching
    const domain = extractDomain(website);

    // Filter brokers by regulator
    const filteredBrokers = {
      ...allBrokers,
      docs: allBrokers.docs
        .filter((broker) => {
          // Check if any regulator matches the domain
          if (broker.regulators && broker.regulators.length > 0) {
            return broker.regulators.some(
              (reg) =>
                typeof reg === 'string' &&
                (reg.toLowerCase().includes(domain.toLowerCase()) ||
                  domain.toLowerCase().includes(reg.toLowerCase()))
            );
          }
          return false;
        })
        .slice(0, limit),
    };

    return filteredBrokers;
  } catch (error) {
    console.error(
      `Failed to fetch brokers by regulator website (${website}):`,
      error
    );
    throw error;
  }
}

/**
 * Fetch brokers by regulator name
 *
 * @param regulatorName The regulator's name or shortName
 * @param limit The maximum number of brokers to return
 * @returns Promise with broker reviews response
 */
export async function getBrokersByRegulatorName(
  regulatorName: string,
  limit: number = 5
): Promise<BrokerReviewsResponse> {
  try {
    // Build query parameters
    const params = new URLSearchParams({
      limit: '20', // Fetch more to filter
      sort: '-brokerRating', // Sort by rating in descending order
    });

    const response = await fetch(`${API_BASE_URL}/broker-reviews?${params}`);

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const allBrokers = (await response.json()) as BrokerReviewsResponse;

    // Filter brokers by regulator name
    const normalizedName = normalizeRegulatorName(regulatorName);

    const filteredBrokers = {
      ...allBrokers,
      docs: allBrokers.docs
        .filter((broker) => {
          // Check if any regulator matches the name
          if (broker.regulators && broker.regulators.length > 0) {
            return broker.regulators.some(
              (reg) =>
                typeof reg === 'string' &&
                areRegulatorNamesSimilar(reg, regulatorName)
            );
          }
          return false;
        })
        .slice(0, limit),
    };

    return filteredBrokers;
  } catch (error) {
    console.error(
      `Failed to fetch brokers by regulator name (${regulatorName}):`,
      error
    );
    throw error;
  }
}
