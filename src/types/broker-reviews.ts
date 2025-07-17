import type { ReviewContentAuthor } from './author';
import type { CategoryReference } from './catRatingsInterface';
import type { BrokerImage } from './index';

export interface BrokerPlatform {
    name: string;
    slug: string;
    id: string;
}

export interface BrokerPros {
    pro: string;
    id: string;
}

export interface BrokerCons {
    con: string;
    id: string;
}

export interface BrokerBaseDetails {
    country?: string;
    headquarters?: string;
    phone?: string;
    email?: string;
    founded?: number;
    website?: string;
    city?: string;
    address?: string;
}

export interface BrokerMeta {
    title?: string;
    description?: string;
    image?: {
        filename: string;
        id: string;
        url: string;
    };
}

export interface BrokerAccount {
    accountName: string;
    minDeposit: number;
    spread: number;
    commission: number;
    id: string;
}

export interface BrokerAsset {
    assetClass: {
        slug: string;
        id: string;
    };
    numberOfAssets: number;
    name: string;
    marginCallLevel?: number;
    stopOutLevel?: number;
    leverage?: string;
    specialMR?: string;
    averageSpread?: {
        assetName: string;
        assetSpread: string;
        id: string;
    }[];
    description?: string;
    id: string;
}

export interface BrokerCategoryRating {
    catScore: number;
    categoryName: string;
    relatedCat: CategoryReference;
    catWeight?: number;
    description?: string;
    id: string;
}

export interface BrokerReviewContent {
    slug: string;
    id: string;
}

export interface BrokerReviewContentResponse {
    docs: BrokerReviewContent[];
    hasNextPage: boolean;
}

export interface BrokerRatings {
    researchEducation: number;
    feesAndCommissions: number;
    safetyAndRegulation: number;
    tradingPlatforms: number;
    userReviewsTrust: number;
    overallExperience: number;
    customerService: number;
    mobileTrading: number;
    marketAccess: number;
}

export interface BrokerCatRating {
    catScore: number;
    categoryName?: string;
    relatedCat?: CategoryReference;
    catWeight?: number;
    description?: string;
    relatedCatSlug?: string;
}

export interface BrokerCatRatings {
    researchEducation: BrokerCatRating;
    customerService: BrokerCatRating;
    userReviewsTrust: BrokerCatRating;
    safetyAndRegulation: BrokerCatRating;
    feesAndCommissions: BrokerCatRating;
    marketAccess: BrokerCatRating;
    mobileTrading: BrokerCatRating;
    tradingPlatforms: BrokerCatRating;
    overallExperience: BrokerCatRating;
}

export interface BrokerReview {
    id: string;
    createdAt: string;
    updatedAt: string;
    brokerWebsite?: string;
    bonusInfo?: {
        typeOfBonus?: string[];
    };
    minDeposit?: number;
    slug: string;
    author: ReviewContentAuthor[];
    acceptsMpesa: boolean;
    cmaRegulated: boolean;
    copytrading: boolean;
    islamicAccount: boolean;
    bonusAvailable: boolean;
    maxLeverage?: string;
    brokerRating: number;
    pubDate?: string;
    status: string;
    brokerName: string;
    title: string;
    quickVerdict?: string;
    description?: string;
    keywords?: { keyword: string; id: string }[];
    faqs?: { question: string; answer: string; id: string }[];
    ratings?: BrokerRatings;
    catRatings: BrokerCatRatings;
    fundingMethods?: string[];
    features?: string[];
    regulators?: string[];
    markets?: string[];
    countriesNotAllowed?: string[];
    brokerPaymentMethods?: string[];
    tradingPlatforms?: string[];
    spread?: number;
    commission?: number;
    brokerAssets?: BrokerAsset[];
    baseDetails?: BrokerBaseDetails;
    pros?: BrokerPros[];
    cons?: BrokerCons[];
    regulations?: any[];
    gallery?: BrokerImage[];
    meta?: BrokerMeta;
    account?: BrokerAccount[];
    image?: BrokerImage;
    brokerPlatforms?: BrokerPlatform[];
    isRegulated: boolean;
    reviewContent?: BrokerReviewContentResponse;
    categoryRating?: BrokerCategoryRating[];
    contactDetails?: any[];
    restrictedCountries?: string[];
    logo?: {
        filename: string;
        id: string;
        url: string;
    } | string;
}

export interface BrokerReviewsResponse {
    docs: BrokerReview[];
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