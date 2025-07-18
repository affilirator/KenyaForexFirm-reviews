/**
 * Type definitions for ASIC regulation global data
 */

export interface RichText {
  root: {
    children: any[];
    direction: string;
    format: string;
    indent: number;
    type: string;
    version: number;
  };
}

export interface RegulationDetail {
  blockType: string;
  title: string;
  description: string;
  details: RichText;
  referenceLink: string;
  implementationDate: string;
  id: string;
}

export interface AsicRegulationGlobal {
  createdAt: string;
  updatedAt: string;
  globalType: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    heading: string;
    subheading: string;
    introduction: RichText;
    generateWithAI: boolean;
    heroImage: {
      url: string;
      alt: string;
      caption: string;
    };
    tableOfContents: boolean;
  };
  aboutRegulator: {
    sectionTitle: string;
    sectionId: string;
    content: RichText;
    generateWithAI: boolean;
    establishedDate: string;
    regulatorLogo: {
      url: string;
      alt: string;
    };
    officialWebsite: string;
  };
  contentSections: any[];
  regulations: {
    sectionTitle: string;
    sectionId: string;
    introduction: RichText;
    regulationDetails: RegulationDetail[];
  };
  brokerRequirements: {
    sectionTitle: string;
    sectionId: string;
    content: RichText;
    capitalRequirements: any;
    clientMoneyProtection: {
      protectionLimit: string;
    };
    leverageLimits: {
      retailClients: string;
    };
  };
  benefitsProtections: {
    sectionTitle: string;
    sectionId: string;
    content: RichText;
    benefitsList: any[];
  };
  faq: {
    sectionTitle: string;
    sectionId: string;
    faqItems: Array<{
      question: string;
      answer: RichText;
    }>;
  };
  conclusion: {
    sectionTitle: string;
    sectionId: string;
    content: RichText;
  };
  relatedContent: {
    sectionTitle: string;
    articles: Array<{
      title: string;
      description: string;
      link: string;
      image: {
        url: string;
        alt: string;
      };
    }>;
  };
  relationships: {
    regulatedBrokers: Array<{
      title: string;
      brokerName: string;
      brokerRating: number;
      slug: string;
      id: string;
    }>;
    author: {
      slug: string;
      name: string;
      id: string;
    };
  };
  id: string;
}