// Data from PayloadCMS available in the broker-reviews collection
export interface CatRatings {
  researchEducation: {
    catScore: number;
    relatedCat?: CategoryReference;
    description?: string;
    relatedCatSlug?: string;
  };
  customerService: {
    catScore: number;
    relatedCat?: CategoryReference;
    description?: string;
    relatedCatSlug?: string;
  };
  userReviewsTrust: {
    catScore: number;
    relatedCat?: CategoryReference;
    description?: string;
    relatedCatSlug?: string;
  };
  safetyAndRegulation: {
    catScore: number;
    relatedCat?: CategoryReference;
    description?: string;
    relatedCatSlug?: string;
  };
  feesAndCommissions: {
    catScore: number;
    relatedCat?: CategoryReference;
    description?: string;
    relatedCatSlug?: string;
  };
  marketAccess: {
    catScore: number;
    relatedCat?: CategoryReference;
    description?: string;
    relatedCatSlug?: string;
  };
  mobileTrading: {
    catScore: number;
    relatedCat?: CategoryReference;
    description?: string;
    relatedCatSlug?: string;
  };
  tradingPlatforms: {
    catScore: number;
    relatedCat?: CategoryReference;
    description?: string;
    relatedCatSlug?: string;
  };
  overallExperience: {
    catScore: number;
    relatedCat?: CategoryReference;
    description?: string;
    relatedCatSlug?: string;
  };
}

export interface CategoryReference {
  slug: string;
  id: string;
}

export type CatRatingsType = {
  [category: string]: {
    catScore: number;
    relatedCat?: CategoryReference;
    description?: string;
    relatedCatSlug?: string;
  };
};
