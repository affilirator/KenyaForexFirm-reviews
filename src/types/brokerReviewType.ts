// src/types.ts

export type CatRatingItem = {
  catScore: number;
  catWeight?: number;
  relatedCat?: {
    name: string;
    defaultWeight: number;
    id: string;
  };
};

export type CatRatings = {
  researchEducation:   CatRatingItem;
  customerService:     CatRatingItem;
  userReviewsTrust:    CatRatingItem;
  safetyAndRegulation: CatRatingItem;
  feesAndCommissions:  CatRatingItem;
  marketAccess:        CatRatingItem;
  mobileTrading:       CatRatingItem;
  tradingPlatforms:    CatRatingItem;
  overallExperience:   CatRatingItem;
};

export interface Broker {
  id: string;
  slug: string;
  brokerName: string;
  quickVerdict: string;
  description: string;
  brokerRating: number;
  pubDate: string;
  catRatings: CatRatings;
  // …add any other fields you need
}

export interface PaginatedBrokers {
  docs: Broker[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  page: number;
  totalPages: number;
  // …etc
}
