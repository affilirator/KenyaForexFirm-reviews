// src/data/brokers.ts
import type { BrokerProps } from '~/types';

export const staticBrokers: BrokerProps[] = [
  {
    id: "1",
    brokerName: "XM Group",
    logo: "🏛️",
    brokerRating: 4.8,
    regulation: [ // an array of regulation objects
      { name: "Financial Conduct Authority", shortName: "FCA", country: "United Kingdom", id: "fca" },
      { name: "Cyprus Securities and Exchange Commission", shortName: "CySEC", country: "Cyprus", id: "cysec" },
      { name: "Australian Securities and Investments Commission", shortName: "ASIC", country: "Australia", id: "asic" },
      { name: "International Financial Services Commission", shortName: "IFSC", country: "Belize", id: "ifsc" }
    ],
    minDeposit: 5,
    maxLeverage: "888:1",
    spread: "0.6",
    slug: "xm-group",
    features: ["CMA Approved", "Kenyan Support", "Mobile Trading", "Copy Trading", "Demo Account"],
    // Additional properties for filtering
    platforms: ["MT4", "MT5", "WebTrader"],
    accountTypes: ["Micro", "Standard", "XM Zero"],
    paymentMethods: ["M-Pesa", "Bank Transfer", "Credit Card", "Skrill"],
    languages: ["English", "Swahili"],
    founded: 2009,
    headquarters: "Cyprus",
    cmaApproved: true,
    bonusAvailable: true,
    islamicAccount: true,
    category: "established"
  },
  // ... other brokers
];
