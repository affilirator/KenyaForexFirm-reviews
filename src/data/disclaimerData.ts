import { site } from './site';

export const disclaimerHero = {
  title: 'Risk Disclaimer',
  subtitle:
    'Important information about forex trading risks and our website content',
  lastUpdated: 'July 15, 2025',
};

export const disclaimerSections = [
  {
    id: 'general-disclaimer',
    title: 'General Disclaimer',
  },
  {
    id: 'trading-risks',
    title: 'Forex Trading Risks',
  },
  {
    id: 'no-investment-advice',
    title: 'No Investment Advice',
  },
  {
    id: 'accuracy-disclaimer',
    title: 'Information Accuracy',
  },
  {
    id: 'third-party-content',
    title: 'Third-Party Content',
  },
  {
    id: 'affiliate-disclosure',
    title: 'Affiliate Disclosure',
  },
  {
    id: 'regulatory-disclaimer',
    title: 'Regulatory Information',
  },
  {
    id: 'past-performance',
    title: 'Past Performance',
  },
  {
    id: 'liability-limitation',
    title: 'Limitation of Liability',
  },
  {
    id: 'jurisdiction',
    title: 'Jurisdiction',
  },
  {
    id: 'contact',
    title: 'Contact Information',
  },
];

export const contactInfo = {
  email: site.address.email,
  companyName: site.siteName,
  address: {
    street: site.address.streetAddress,
    city: site.address.city,
    country: site.address.country,
  },
};

export const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Risk Disclaimer - Kenya Forex Firm',
  description:
    'Important risk disclaimer and legal information about forex trading risks, investment advice, and website content accuracy for Kenya Forex Firm users.',
  url: `${site.url}/disclaimer/`,
  datePublished: '2025-07-15',
  dateCreated: '2024-01-01',
  dateModified: new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }),
  lastReviewed: disclaimerHero.lastUpdated,
  specialty: 'Risk Disclaimer',
  isPartOf: {
    '@id': `${site.url}/#website`,
  },
  mainContentOfPage: {
    '@type': 'WebPageElement',
    isPartOf: {
      '@id': `${site.url}/#website`,
    },
  },
  about: {
    '@type': 'Thing',
    name: 'Financial Risk Disclosure',
    description:
      'Information about financial trading risks and legal disclaimers',
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Forex Traders',
  },
  publisher: {
    '@type': 'Organization',
    name: site.siteName,
    logo: {
      '@type': 'ImageObject',
      url: `${site.url}${site.logoPath}`,
    },
  },
};
