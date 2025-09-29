import type { BrokerReviewsResponse } from '../types/broker-reviews';
const brokers = (await (
  await fetch('https://api.kenyaforexfirm.com/api/broker-reviews?limit=1000')
).json()) as BrokerReviewsResponse;
export const regulatedBrokers = brokers.docs.filter(
  (broker) =>
    broker.isRegulated ||
    broker.cmaRegulated ||
    (broker.regulators && broker.regulators.length > 0)
);
// Exporting regulated brokers for use in other parts of the application

// List of regulators for each broker
export const regulatedBy = regulatedBrokers.map((broker) => ({
  brokerName: broker.brokerName,
  regulators: broker.regulators || [],
  cmaRegulated: broker.cmaRegulated,
  isRegulated: broker.isRegulated,
  slug: broker.slug,
}));

// destructure the regulators array
export const allRegulators = regulatedBrokers.flatMap(
  (broker) => broker.regulators || []
);

// Create a component to render the unique regulators
export const uniqueRegulators = Array.from(new Set(allRegulators));
