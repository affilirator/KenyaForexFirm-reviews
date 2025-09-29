// Nested category ratings
interface CatRatings {
  researchEducation: { catScore: number };
  customerService: { catScore: number };
  userReviewsTrust: { catScore: number };
  safetyAndRegulation: { catScore: number };
  feesAndCommissions: { catScore: number };
  marketAccess: { catScore: number };
  mobileTrading: { catScore: number };
  tradingPlatforms: { catScore: number };
  overallExperience: { catScore: number };
}

// src/types.ts
export interface CatRating {
  catScore: number;
  relatedCat?: {
    name: string;
    defaultWeight: number;
    id: string;
  };
  catWeight?: number;
}

export interface Pro {
  pro: string;
  id: string;
}

export interface Con {
  con: string;
  id: string;
}

export interface Image {
  url: string;
  thumbnailURL: string;
  sizes: {
    small: {
      url: string;
      width: number;
      height: number;
      mimeType: string;
      filesize: number;
      filename: string;
    };
    tablet: {
      url: string;
      width: number;
      height: number;
      mimeType: string;
      filesize: number;
      filename: string;
    };
    large: {
      url: string;
      width: number;
      height: number;
      mimeType: string;
      filesize: number;
      filename: string;
    };
  };
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  id: string;
}

export interface BrokerAsset {
  assetClass: { slug: string; id: string };
  numberOfAssets: number;
  name: string;
  marginCallLevel: number;
  stopOutLevel: number;
  leverage: string;
  specialMR: string;
  averageSpread: Array<{ assetName: string; assetSpread: string; id: string }>;
  description: string;
  id: string;
}

export interface BrokerPlatform {
  name: string;
  slug: string;
  id: string;
}

export interface Broker {
  id: string;
  createdAt: string;
  updatedAt: string;
  brokerWebsite: string;
  bonusInfo?: {
    typeOfBonus: string[];
  };
  minDeposit: number;
  slug: string;
  acceptsMpesa: boolean;
  cmaRegulated: boolean;
  copytrading: boolean;
  islamicAccount: boolean;
  bonusAvailable: boolean;
  maxLeverage: string;
  brokerRating: number;
  status: string;
  brokerName: string;
  title: string;
  quickVerdict?: string;
  description?: string;
  keywords?: { keyword: string; id: string }[];
  faqs?: { question: string; answer: string; id: string }[];
  catRatings?: Record<string, CatRating>;
  features?: string[];
  markets?: string[];
  brokerPaymentMethods?: string[];
  tradingPlatforms?: string[];
  spread?: number;
  commission?: number;
  brokerAssets?: BrokerAsset[];
  baseDetails: {
    country?: string;
    headquarters?: string;
    phone?: string;
    email?: string;
    founded: number;
    website: string;
    city?: string;
    address?: string;
  };
  pros?: Pro[];
  cons?: Con[];
  image?: Image;
  brokerPlatforms?: BrokerPlatform[];
  meta?: {
    title?: string;
    description?: string;
    image?: {
      filename: string;
      id: string;
      url: string;
    };
  };
}

// Full API response
interface PayloadResponse {
  docs: Broker[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: number | null;
  page: number;
  pagingCounter: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
}
