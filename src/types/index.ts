interface BrokerRegulation {
  name: string;
  shortName: string;
  country: string;
}

export interface IndexBrokerProps {
  name: string;
  rating: number;
  features: string[];
  regulation: BrokerRegulation[];
  minDeposit: number;
  spread: string;
  logo: string;
}

export type AccountType = {
    minDeposit: number;
    accountName: string;

}

export type Regulation = {
  name: string;
  shortName: string;
  country: string;
  id: string;
}

export type BrokerReview = {
  id: string;
  brokerName: string;
  maxLeverage: string;
  brokerRating: number;
  account?: AccountType[];
  slug: string;
  features?: string[];
  regulation?: Array<Regulation> | Regulation[];
  minDeposit?: number;
  spread?: string;
  logo?: string;
}

export type Logo =  {
  filename: string;
  id: string;
  url: string;

}

export type BrokerProps = {
  id: string;
  brokerName: string;
  maxLeverage?: string;
  brokerRating: number;
  slug: string;
  features?: string[];
  platforms?: string[];
  accountTypes?: string[];
  paymentMethods?: string[];
  languages?: string[];
  founded?: number;
  headquarters?: string;
  cmaApproved?: boolean;
  bonusAvailable?: boolean;
  islamicAccount?: boolean;
  category?: string;
  logo?: string | Logo;
  review?: BrokerReview;
  regulation?: Array<Regulation> | Regulation[];
  minDeposit?: number;
  spread?: string | number;
  commission?: string | number;
  leverage?: string;
  
}