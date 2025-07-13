// src/utils/brokerFilters.ts
import type { BrokerProps } from '~/types';

export interface FilterOptions {
  searchTerm?: string;
  regulation?: string;
  deposit?: string;
  platform?: string;
  features?: string;
}

export function filterBrokers(brokers: BrokerProps[], filters: FilterOptions): BrokerProps[] {
  return brokers.filter(broker => {
    // Search filter
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      const matchesName = broker.brokerName.toLowerCase().includes(searchLower);
      const matchesFeatures = broker.features?.some(f => f.toLowerCase().includes(searchLower));
      const matchesRegulation = broker.regulation?.some(r => 
        r.name.toLowerCase().includes(searchLower) || r.shortName.toLowerCase().includes(searchLower)
      );
      
      if (!matchesName && !matchesFeatures && !matchesRegulation) return false;
    }

    // Regulation filter
    if (filters.regulation) {
      if (filters.regulation === 'cma-approved' && !broker.cmaApproved) return false;
      if (filters.regulation !== 'cma-approved' && 
          !broker.regulation?.some(r => r.shortName.toLowerCase() === filters.regulation)) return false;
    }

    // Deposit filter
    if (filters.deposit && broker.minDeposit) {
      const ranges = {
        '0-10': [0, 10],
        '10-100': [10, 100],
        '100-500': [100, 500],
        '500+': [500, Infinity]
      };
      const [min, max] = ranges[filters.deposit as keyof typeof ranges] || [0, Infinity];
      if (broker.minDeposit < min || broker.minDeposit > max) return false;
    }

    return true;
  });
}

export function sortBrokers(brokers: BrokerProps[], sortBy: string): BrokerProps[] {
  return [...brokers].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.brokerRating - a.brokerRating;
      case 'spread':
        return parseFloat(a.spread || '0') - parseFloat(b.spread || '0');
      case 'deposit':
        return (a.minDeposit || 0) - (b.minDeposit || 0);
      default:
        return 0;
    }
  });
}
