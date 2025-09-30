import type { ReviewContentAuthor } from './author';
import type { CatRatings, CategoryReference } from './catRatingsInterface';
import type {
  Broker,
  ForexInstrument,
  Media,
  TradingStrategy,
} from './payload-types';
interface Regulator {
  name: string;
  shortName: string;
  country: string;
}

export interface ForexTrader {
  id: string;
  /**
   * Full name of the trader, e.g., "John Mwangi"
   */
  name: string;
  /**
   * Check if this trader is featured on the homepage.
   */
  isFeatured?: boolean | null;
  /**
   * Win rate of the trader, e.g., "80%"
   */
  winRate?: string | null;
  /**
   * Performance of the trader, e.g., "+28% YTD"
   */
  performance?: string | null;
  /**
   * Unique URL slug for SEO, e.g., "john-mwangi".
   */
  slug: string;
  /**
   * Professional title, e.g., "Senior Forex Trader"
   */
  title: string;
  /**
   * Primary trading specialty, e.g., "Currency Trades"
   */
  mainSpecialty?: (string | ForexInstrument)[] | null;
  /**
   * Primary trading specialty, e.g., "Currency Trades"
   */
  specialty?: string | null;
  /**
   * Short bio, e.g., "Experienced in currency markets"
   */
  shortBio: string;
  /**
   * A compelling 200-300 word bio highlighting their journey in Kenyas forex scene.
   */
  bio: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  /**
   * A compelling 200-300 word bio highlighting their journey in Kenyas forex scene.
   */
  mainArticle?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  /**
   * Professional headshot or trading setup photo.
   */
  photo: string | Media;
  tradingFrom?: number | null;
  /**
   * Years trading forex—key for credibility.
   */
  experienceYears: number;
  /**
   * Net worth in USD—key for credibility.
   */
  networth: number;
  /**
   * Risk level they are comfortable with.
   */
  riskAppetite?: ('low' | 'medium' | 'high') | null;
  forexBroker?: (string | null) | Broker;
  /**
   * Country of origin, e.g., "Kenya"
   */
  country: string;
  /**
   * tradingStyle is deprecated in favor of style. Primary style—tailored for Kenyan traders juggling MT4 and local brokers.
   */
  tradingStyle?: ('scalper' | 'day' | 'swing' | 'position' | 'other') | null;
  /**
   * List key wins, e.g., "Top 10% in KFC 2023 Challenge".
   */
  achievements?:
    | {
        achievement: string;
        year: number;
        id?: string | null;
      }[]
    | null;
  /**
   * Connect with Kenya's trading community.
   */
  socialLinks?:
    | {
        platform:
          | 'x'
          | 'linkedin'
          | 'instagram'
          | 'facebook'
          | 'youtube'
          | 'xmlFeed'
          | 'other';
        url: string;
        /**
         * Link to the social profile, e.g., "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
         */
        profileUrl?:
          | {
              url: string;
              title?: string | null;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  /**
   * Link to modular strategies this trader uses.
   */
  strategies?: (string | TradingStrategy)[] | null;
  updatedAt: string;
  createdAt: string;
}

interface BrokerRegulation {
  regulator: Regulator;
  licenseNumber?: string;
  status?: string;
}

export interface FundingMethod {
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
  status: string;
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
  commission?: number;
  spread?: number;
};

/**
 * "accountName": "Premier Account",
"minDeposit": 100,
"commission": 3.5,
"spread": 0,
"id": "686efe8c64336547ee287dc8"
}
],
 */

export type Regulation = {
  name: string;
  shortName: string;
  country: string;
  id: string;
};

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
};

export type Logo = {
  filename: string;
  id: string;
  url: string;
};

export type BrokerPros = {
  id: string;
  pro: string;
};

export type BrokerCons = {
  id: string;
  con: string;
};

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
};

export type BrokerBaseDetails = {
  founded?: number;
  country?: string;
  city?: string;
  phone?: string;
  email?: string;
  website?: string;
  address?: string;
  headquarters?: string;
};

export type MetaImage = {
  url: string;
  alt?: string;
  filename?: string;
  id?: string;
};

export type BrokerMeta = {
  title?: string;
  description?: string;
  image?: MetaImage;
};

export type BrokerPlatform = {
  name: string;
  slug: string;
  id: string;
};

export type ImageSizes = {
  small: ImageSize;
  tablet: ImageSize;
  large: ImageSize;
};

export type ImageSize = {
  width: number;
  height: number;
  mimeType: string;
  filesize: number;
  filename: string;
  url: string;
};

export type BrokerImage = {
  createdAt?: string;
  updatedAt?: string;
  status?: string;
  alt?: string;
  blog?: string;
  sizes?: ImageSizes;
  tenant?: string;
  url?: string;
  cdnUrl?: string;
  thumbnailURL?: string | null;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  focalX?: number;
  focalY?: number;
  id?: string;
  slug?: string;
  caption?: string;
};

export type ReviewContent = {
  docs: Array<{
    slug: string;
    id: string;
  }>;
  hasNextPage: boolean;
};

export type BrokerProps = {
  id: string;
  brokerName: string;
  maxLeverage?: string;
  brokerRating: number;
  slug: string;
  account?: AccountType[];
  catRatings: CatRatings;
  brokerWebsite?: string;
  /**
   * @deprecated Use `brokerPlatforms?` instead
   */
  tradingPlatforms: string[];
  cmaRegulated?: boolean;
  meta?: BrokerMeta;
  baseDetails?: BrokerBaseDetails;
  ratings?: BrokerRatings;
  pros?: BrokerPros[];
  cons?: BrokerCons[];
  features?: string[];
  //platforms?: string[];
  brokerPlatforms?: BrokerPlatform[];

  brokerPaymentMethods?: string[];
  fundingMethods?: FundingMethod[];
  selectedAssets?: string[];
  brokerAssets?: string[];
  updatedAt: string;
  createdAt: string;
  status: string;
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
  title: string;
  content: any;
  bestFor: string;
  logo?: string | Logo | BrokerImage;
  image?: BrokerImage;
  gallery?: BrokerImage[];
  review?: BrokerReview;
  author: ReviewContentAuthor[];
  /**
   * @deprecated Use `regulations` instead
   */
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
};
