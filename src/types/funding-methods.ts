import type { BrokerImage } from './index';

export interface FundingMethod {
[x: string]: any;
    id: string;
    name: string;
    slug: string;
    description?: string;
    processingTime?: string;
    fees?: string;
    minAmount?: number;
    maxAmount?: number;
    supportedCountries?: string[];
    logo?: BrokerImage;
    image: BrokerImage;
    status: string;
}

export interface FundingMethodsResponse {
    docs: FundingMethod[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | null;
    nextPage: number | null;
}