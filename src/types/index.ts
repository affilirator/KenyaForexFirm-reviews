import type { ReviewContentAuthor } from "./author";
import type { CatRatings } from "./catRatingsInterface";



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

export type BrokerPros = {
  id: string;
  pro: string;
}

export type BrokerCons = {
  id: string;
  con: string;
}

export type BrokerRatings = {
  feesAndCommissions: number;
  safetyAndRegulation: number;
  tradingPlatforms: number;
  customerService: number;
  researchEducation: number;
  userReviewsTrust: number;
  overallExperience: number;
  mobileTrading: number;
  marketAccess: number;
}

export type BrokerBaseDetails = {
  founded?: number;
  country?: string;
  city?: string;
  phone?: string;
  email?: string;
  website?: string;
  address?: string;
  headquarters?: string;
}

export type MetaImage = {
  url: string;
  alt: string;
}

export type BrokerMeta = {
  title?: string;
  description?: string;
  image?: MetaImage;
}

export type BrokerProps = {
  id: string;
  brokerName: string;
  maxLeverage?: string;
  brokerRating: number;
  slug: string;
  catRatings: CatRatings;
  brokerWebsite?: string;
  cmaRegulated?: boolean;
  meta?: BrokerMeta;
  baseDetails?: BrokerBaseDetails;
  ratings?: BrokerRatings;
  pros?: BrokerPros[];
  cons?: BrokerCons[];
  features?: string[];
  platforms?: string[];
  accountTypes?: string[];
  paymentMethods?: string[];
  selectedAssets?: string[];
  quickVerdict?: string;
  countriesNotAllowed?: string[];
  languages?: string[];
  founded?: number;
  headquarters?: string;
  copytrading?: boolean;
  bonusAvailable?: boolean;
  islamicAccount: boolean;
  acceptsMpesa: boolean;
  category?: string;
  logo?: string | Logo;
  review?: BrokerReview;
  author: ReviewContentAuthor[];
  regulation?: Array<Regulation> | Regulation[];
  minDeposit?: number;
  spread?: string | number;
  commission?: string | number;
  leverage?: string;
  
}