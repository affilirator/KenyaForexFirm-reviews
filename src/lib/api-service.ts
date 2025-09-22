import type { RegulatorResponse } from '../types/regulator';
import type { AuthorResponse } from '../types/author';
//import type { BrokerReviewsResponse } from '../types/broker-reviews';
import type { FundingMethodsResponse } from '../types/funding-methods';
import type { BrokerProps } from '~/types';

const API_BASE_URL = "https://api.kenyaforexfirm.com/api";

/**
 * Generic function to fetch data from API endpoints
 */
async function fetchFromApi<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
  try {
    // Build query string from params
    const queryString = Object.keys(params).length > 0 
      ? '?' + new URLSearchParams(params).toString() 
      : '';
    
    const response = await fetch(`${API_BASE_URL}/${endpoint}${queryString}`);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    
    return await response.json() as T;
  } catch (error) {
    console.error(`Failed to fetch from ${endpoint}:`, error);
    throw error;
  }
}

/**
 * Fetch regulators data
 */
export async function getRegulators(params: Record<string, string> = {}): Promise<RegulatorResponse> {
  return fetchFromApi<RegulatorResponse>('regulators', params);
}

/**
 * Fetch regulator by slug
 */
export async function getRegulatorBySlug(slug: string): Promise<RegulatorResponse> {
  return fetchFromApi<RegulatorResponse>('regulators', { 'where[slug][equals]': slug });
}

/**
 * Fetch authors data
 */
export async function getAuthors(params: Record<string, string> = {}): Promise<AuthorResponse> {
  return fetchFromApi<AuthorResponse>('authors', params);
}

/**
 * Fetch author by slug
 */
export async function getAuthorBySlug(slug: string): Promise<AuthorResponse> {
  return fetchFromApi<AuthorResponse>('authors', { 'where[slug][equals]': slug });
}

/**
 * Fetch broker reviews data
 */
export async function getBrokerReviews(params: Record<string, string> = {}): Promise<BrokerProps> {
  return fetchFromApi<BrokerProps>('broker-reviews', params);
}

/**
 * Fetch broker review by slug
 */
export async function getBrokerReviewBySlug(slug: string): Promise<BrokerProps> {
  return fetchFromApi<BrokerProps>('broker-reviews', { 'where[slug][equals]': slug });
}

/**
 * Fetch funding methods data
 */
export async function getFundingMethods(params: Record<string, string> = {}): Promise<FundingMethodsResponse> {
  return fetchFromApi<FundingMethodsResponse>('funding-methods', params);
}

/**
 * Fetch funding method by slug
 */
export async function getFundingMethodBySlug(slug: string): Promise<FundingMethodsResponse> {
  return fetchFromApi<FundingMethodsResponse>('funding-methods', { 'where[slug][equals]': slug });
}