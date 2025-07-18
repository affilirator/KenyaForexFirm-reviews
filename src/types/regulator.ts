/**
 * Type definitions for regulator data
 */

export interface RichTextNode {
  children: any[];
  type: string;
  [key: string]: any;
}

export interface RichText {
  root: RichTextNode;
}

export interface RegulatorSection {
  sectionTitle: string;
  sectionId: string;
  content: RichText;
  featuredImage?: {
    url: string;
    alt: string;
  };
  imagePosition?: 'left' | 'right' | 'top' | 'bottom';
  keyPoints?: Array<{ point: string }>;
}

export interface RegulatorFAQItem {
  question: string;
  answer: RichText;
}

export interface RegulatorFAQSection {
  sectionTitle: string;
  sectionId: string;
  introduction?: RichText;
  faqItems: RegulatorFAQItem[];
}

export interface RelatedArticle {
  title: string;
  description?: string;
  link: string;
  image?: {
    url: string;
    alt?: string;
  };
}

export interface RelatedContent {
  sectionTitle: string;
  articles: RelatedArticle[];
}

export interface RegulatedBroker {
  title: string;
  brokerName: string;
  brokerRating: number;
  slug: string;
  id: string;
}

export interface Author {
  slug: string;
  name: string;
  id: string;
}

export interface RegulatorPage {
  title: string;
  slug: string;
  heroSection: {
    heading: string;
    subheading?: string;
    introduction: RichText;
    heroImage?: {
      url: string;
      alt: string;
    };
  };
  sections: RegulatorSection[];
  faqSection?: RegulatorFAQSection;
  conclusionSection?: {
    sectionTitle: string;
    sectionId: string;
    content: RichText;
  };
  relatedContent: RelatedContent;
  relationships: {
    regulatedBrokers: RegulatedBroker[];
    author: Author;
  };
  id: string;
}

export interface Regulator {
  name: string;
  shortName: string;
  country: string;
  description: string;
  trustScore: number;
  maxLeverage: string;
  established: string;
  website: string;
  slug: string;
  logo?: {
    url: string;
  };
}