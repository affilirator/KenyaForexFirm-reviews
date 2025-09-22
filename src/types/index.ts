import type { ReviewContentAuthor } from "./author";
import type { CatRatings, CategoryReference } from "./catRatingsInterface";

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

export type Logo = {
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
  alt?: string;
  filename?: string;
  id?: string;
}

export type BrokerMeta = {
  title?: string;
  description?: string;
  image?: MetaImage;
}

export type BrokerPlatform = {
  name: string;
  slug: string;
  id: string;
}

export type ImageSizes = {
  small: ImageSize;
  tablet: ImageSize;
  large: ImageSize;
}

export type ImageSize = {
  width: number;
  height: number;
  mimeType: string;
  filesize: number;
  filename: string;
  url: string;
}

export type BrokerImage = {
  createdAt?: string;
  updatedAt?: string;
  status?: string;
  alt?: string;
  blog?: string;
  sizes?: ImageSizes;
  tenant?: string;
  url: string;
  thumbnailURL?: string | null;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX?: number;
  focalY?: number;
  id: string;
  slug?: string;
  caption?: string;
}

export type ReviewContent = {
  docs: Array<{
    slug: string;
    id: string;
  }>;
  hasNextPage: boolean;
}

export type BrokerProps = {
  id: string;
  brokerName: string;
  maxLeverage?: string;
  brokerRating: number;
  slug: string;
  catRatings: CatRatings;
  brokerWebsite?: string;
  tradingPlatforms: string[];
  cmaRegulated?: boolean;
  meta?: BrokerMeta;
  baseDetails?: BrokerBaseDetails;
  ratings?: BrokerRatings;
  pros?: BrokerPros[];
  cons?: BrokerCons[];
  features?: string[];
  platforms?: string[];
  brokerPlatforms?: BrokerPlatform[];
  accountTypes?: string[];
  paymentMethods?: string[];
  fundingMethods?: string[];
  selectedAssets?: string[];
  brokerAssets?: string[];
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
  logo?: string | Logo | BrokerImage;
  image?: BrokerImage;
  gallery?: BrokerImage[];
  review?: BrokerReview;
  author: ReviewContentAuthor[];
  regulation?: Array<Regulation> | Regulation[];
  regulations?: BrokerRegulation[];
  regulators?: string[];
  isRegulated?: boolean;
  minDeposit?: number;
  spread?: string | number;
  commission?: string | number;
  leverage?: string;
  description?: string;
  keywords?: string[];
  faqs?: any[];
  reviewContent?: ReviewContent;
  categoryRating?: any[];
  contactDetails?: any[];
  restrictedCountries?: string[];
}