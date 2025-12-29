export enum RegulatoryStatus {
  CMA_REGULATED = 'CMA Regulated',
  OFFSHORE = 'Offshore / Unregulated',
  TIER_1_GLOBAL = 'Tier-1 Global (FCA/ASIC)',
}

export interface BrokerMetrics {
  spreadConsistency: number; // 0-10
  executionSpeedMs: number;
  withdrawalSpeedIndex: number; // 0-10
  platformStability: number; // 0-10
  educationScore: number; // 0-10
  supportResponsiveness: number; // 0-10
  kenyanMarketAlignment: number; // 0-10
  safetyScore: number; // 0-10 - New comprehensive safety rating
}

export interface RadarDataPoint {
  subject: string;
  A: number;
  fullMark: number;
}

export interface Screenshot {
  url: string;
  title: string;
  annotation: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TechnicalSpecs {
  licenseNumber: string;
  serverLocations: string[];
  platforms: string[];
  maxLeverage: string;
  baseCurrencies: string[];
  regulatorUrl?: string; // New: Direct link to regulator verification
}

export interface RegulatorDetail {
  name: string;
  nbp: boolean; // Negative Balance Protection Mandated?
  segregation: boolean; // Segregated Funds Mandated?
  compensation: string; // Compensation Scheme details (or "None")
  tier: 1 | 2 | 3; // 1=High, 3=Low/Offshore
  disputeResolution: string; // New: Body handling complaints
}

export interface TradingCosts {
  avgSpreadEURUSD: number; // pips
  commissionPerLot: number; // USD round turn
  minDeposit: number; // USD
}

export interface AccountType {
  name: string;
  description: string;
  avgSpreadEURUSD: number;
  commissionPerLot: number;
  minDepositUSD: number;
}

export interface FeeStructure {
  inactivity: string;
  withdrawal: string;
  conversion: string;
  swapRates: string;
  copyTrading: string; // New: Specific fees for social trading
}

export type TestStatus = 'pass' | 'fail' | 'warning' | 'neutral';

export interface TestLogEntry {
  id: string;
  date: string;
  event: string;
  action: string;
  result: string;
  status: TestStatus;
}

export interface SpreadDataPoint {
  time: string;
  spread: number;
}

export interface ReviewHistoryItem {
  year: number;
  date: string;
  verdict: string;
  score: number;
}

export interface UserReview {
  id: string;
  author: string;
  date: string;
  rating: number; // 1-5
  comment: string;
  verified: boolean;
  location: string; // e.g., "Nairobi", "Mombasa"
  verifiedTrade?: string; // e.g. "Real Account / M-Pesa Deposit"
}

export interface Broker {
  id: string;
  name: string;
  logoUrl: string;
  foundedYear: number;
  regulatoryStatus: RegulatoryStatus;
  primaryRegulator: string; // New: Key for REGULATOR_INFO to identify primary contracting entity
  metrics: BrokerMetrics;
  minDepositUSD: number; // Standardized to USD for internal logic, displayed localized
  tradingCosts: TradingCosts; // Kept for backward compatibility with Comparison table
  accountTypes: AccountType[]; // New detailed account structure
  fees: FeeStructure; // New structured fee data
  hasMpesa: boolean;
  hasSwahiliSupport: boolean;
  hasNairobiOffice: boolean;
  hasCrypto: boolean;
  hasCopyTrading: boolean; // Indicates if broker supports Social/Copy trading
  socialTradingPlatforms: string[]; // New: List of specific copy platforms (e.g. cTrader Copy, HFcopy)
  offshoreRegulators: string[]; // New: List of other/offshore regulators
  narrative: {
    summary: string;
    testingNotes: string;
    hiddenFees: string;
    caseStudy: string;
    videoUrl?: string; // New: URL for video review
  };
  pros: string[];
  cons: string[];
  screenshots: Screenshot[];
  faqs: FAQ[];
  techSpecs: TechnicalSpecs;
  testLog: TestLogEntry[];
  spreadAnalysis: SpreadDataPoint[]; // New: For chart
  reviewHistory: ReviewHistoryItem[]; // New: For timeline
  userReviews: UserReview[]; // New: User generated content
}

export type FilterComplexity = 'beginner' | 'intermediate' | 'expert';

export interface UserPreferences {
  complexity: FilterComplexity;
  weighting: {
    cost: number;
    education: number;
    platform: number;
    safety: number;
  };
}
