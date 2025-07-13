import type { BrokerProps } from '../types';

// Filter brokers by regulation
export function filterByRegulation(brokers: BrokerProps[], regulator: string): BrokerProps[] {
  return brokers.filter(broker => 
    broker.regulation?.some(reg => 
      reg.shortName.toLowerCase() === regulator.toLowerCase() ||
      reg.name.toLowerCase().includes(regulator.toLowerCase())
    )
  );
}

// Filter brokers by payment method
export function filterByPaymentMethod(brokers: BrokerProps[], method: string): BrokerProps[] {
  return brokers.filter(broker =>
    broker.paymentMethods?.some(payment =>
      payment.toLowerCase().includes(method.toLowerCase())
    )
  );
}

// Filter brokers by platform
export function filterByPlatform(brokers: BrokerProps[], platform: string): BrokerProps[] {
  return brokers.filter(broker =>
    broker.platforms?.some(p =>
      p.toLowerCase().includes(platform.toLowerCase())
    )
  );
}

// Get unique values for generating static paths
export function getUniqueRegulators(brokers: BrokerProps[]): string[] {
  const regulators = new Set<string>();
  brokers.forEach(broker => {
    broker.regulation?.forEach(reg => {
      regulators.add(reg.shortName.toLowerCase());
    });
  });
  return Array.from(regulators);
}

export function getUniquePaymentMethods(brokers: BrokerProps[]): string[] {
  const methods = new Set<string>();
  brokers.forEach(broker => {
    broker.paymentMethods?.forEach(method => {
      methods.add(method.toLowerCase().replace(/[^a-z0-9]/g, '-'));
    });
  });
  return Array.from(methods);
}

export function getUniquePlatforms(brokers: BrokerProps[]): string[] {
  const platforms = new Set<string>();
  brokers.forEach(broker => {
    broker.platforms?.forEach(platform => {
      platforms.add(platform.toLowerCase().replace(/[^a-z0-9]/g, '-'));
    });
  });
  return Array.from(platforms);
}