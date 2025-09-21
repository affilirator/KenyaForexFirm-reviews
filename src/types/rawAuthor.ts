export interface Author {
  id: string;
  tenant?: (string | null) | Tenant;
  /**
   * A URL-friendly version of the title, automatically generated if left empty.
   */
  slug: string;
  blog?: (string | null) | Blog;
  /**
   * Name to be displayed on the blog posts
   */
  publishingName?: string | null;
  /**
   * Professional title (e.g., "Senior Forex Analyst")
   */
  jobTitle?: string | null;
  /**
   * Professional credentials (e.g., "CFA, MBA")
   */
  credentials?: string | null;
  /**
   * Professional headshot (recommended 400x400px)
   */
  authorImage?: (string | null) | Media;
  /**
   * Create a hook to automatically set this depending on logged in user who is not admin
   */
  user?: (string | null) | User;
  name: string;
  /**
   * Detailed professional biography highlighting expertise
   */
  authorBio?: {
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
   * Brief 1-2 sentence bio for author cards (max 160 characters)
   */
  bio?: string | null;
  /**
   * Years of experience in forex/financial markets
   */
  yearsExperience?: number | null;
  location?: {
    city?: string | null;
    country?: string | null;
  };
  reviews?: {
    docs?: (string | BrokerReview)[];
    hasNextPage?: boolean;
    totalDocs?: number;
  };
  paymentMethods?: {
    docs?: (string | BrokerReview)[];
    hasNextPage?: boolean;
    totalDocs?: number;
  };
  socialMediaProfiles?: {
    facebookUrl?: string | null;
    twitterUrl?: string | null;
    youtubeUrl?: string | null;
    instagramUrl?: string | null;
    websiteUrl?: string | null;
    linkedinUrl?: string | null;
    additionalProfiles?:
      | {
          profileName?: string | null;
          profileUrl?: string | null;
          id?: string | null;
        }[]
      | null;
  };
  authorExpertise?: (string | Expertise)[] | null;
  expertise?:
    | {
        area:
          | 'Investment Decision Making'
          | 'Portfolio and enterprise risk management'
          | 'Charting and Pattern Recognition'
          | 'Intermarket and Correlation Analysis'
          | 'Sentiment Analysis'
          | 'Historical Simulation and Optimization'
          | 'Rule_Based Strategy Design'
          | 'Strategic Financial Management'
          | 'Financial statement analysis'
          | 'Financial Planning and Analysis'
          | 'Investment Decision Analysis'
          | 'Performance Management'
          | 'Budgeting and Forecasting'
          | 'Internal Controls and Compliance'
          | 'Cost Management'
          | 'Risk Management'
          | 'Investment Analysis'
          | 'Financial Modeling'
          | 'Investment Portfolio Management'
          | 'Investment Strategy Development'
          | 'Investment Product Analysis'
          | 'Investment Product Development'
          | 'Investment Product Management'
          | 'Investment Product Selection'
          | 'Investment Product Valuation'
          | 'Investment Product Valuation and Analysis'
          | 'Investment Product Valuation and Analysis'
          | 'Investment Product Valuation and Analysis';
        description?: string | null;
        url?: string | null;
        id?: string | null;
      }[]
    | null;
  knowsAbout?:
    | {
        fieldName?: string | null;
        fieldUrl?: string | null;
        description?: string | null;
        id?: string | null;
      }[]
    | null;
  certifications?:
    | {
        name?: string | null;
        organization?: string | null;
        year?: number | null;
        url?: string | null;
        id?: string | null;
      }[]
    | null;
  education?:
    | {
        degree?: string | null;
        institution?: string | null;
        year?: number | null;
        url?: string | null;
        id?: string | null;
      }[]
    | null;
  workHistory?:
    | {
        position?: string | null;
        company?: string | null;
        startYear?: number | null;
        endYear?: number | null;
        current?: boolean | null;
        description?: string | null;
        id?: string | null;
      }[]
    | null;
  /**
   * Additional profile URLs for schema.org sameAs property
   */
  sameAs?:
    | {
        url?: string | null;
        id?: string | null;
      }[]
    | null;
  alumniOf?:
    | {
        name?: string | null;
        url?: string | null;
        id?: string | null;
      }[]
    | null;
  awards?:
    | {
        name?: string | null;
        year?: number | null;
        description?: string | null;
        id?: string | null;
      }[]
    | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | R2Media;
  };
  updatedAt: string;
  createdAt: string;
}