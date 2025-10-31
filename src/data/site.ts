// If you intended to use import.meta.env.SITE as a fallback, consider:
const siteUrl = import.meta.env.SITE || 'https://fx.kenyaforexfirm.com';

const organization = {
  name: 'Kenya Forex Firm',
  url: 'https://kenyaforexfirm.com',
};

export const site = {
  name: 'Best Forex Broker Reviews in Kenya | By Kenya Forex Firm',
  alternateName: 'Kenya Forex Firm',
  siteName: organization.name,
  schemaId: `${siteUrl}/#website`,
  foundingDate: '2018',
  founders: [
    {
      '@type': 'Person',
      name: 'Patrick Mahinge',
      jobTitle: 'Chief Editor & Senior Financial Analyst',
      url: 'https://fx.kenyaforexfirm.com/authors/patrick-mahinge',
    },
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Editorial Inquiries",
    "email": "editor@kenyaforexfirm.com",
    "url": "https://fx.kenyaforexfirm.com/contact",
    "availableLanguage": ["English", "Swahili"]
  },
  audience: 'Forex Traders in Kenya',
  description: `Kenya Forex Firm is Kenya’s leading authority on forex and CFD broker reviews, trading education, and market analysis. Founded and operated by certified financial analysts and trading educators, we provide unbiased, data-driven insights to help Kenyan traders make informed decisions. Our mission is to bring transparency, accuracy, and professionalism to online trading by reviewing regulated brokers, comparing trading costs, and publishing evidence-based research backed by real trading experience.`,
  url: siteUrl,
  affiliateSlug: 'goto',
  currentYear: new Date().getFullYear(),
  canonicalURL: typeof window !== 'undefined' ? window.location.href : siteUrl,
  logoPath: '/favicon.svg',
  reviewsIndexSlug: 'review/best-forex-brokers',
  profiles: [
    {
      facebook: 'https://twitter.com/kenyaforexfirm',
    },
    {
      twitter: 'https://facebook.com/kenyaforexfirm',
    },
  ],
  address: {
    email: 'support@kenyaforexfirm.com',
    city: 'Nairobi',
    addressLocality: 'Nairobi',
    state: 'Nairobi',
    country: 'Kenya',
    countryShortName: 'KE',
    postalCode: '77001',
    streetAddress: 'Westlands',
    phone: '+254710251380',
  },
  organization: {
    name: organization.name,
    url: organization.url,
    id: `${organization.url}/#Organization`,
  },
  //org: organization,
};
//export const email= site.address.emailAddress
