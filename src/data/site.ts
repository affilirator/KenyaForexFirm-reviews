// If you intended to use import.meta.env.SITE as a fallback, consider:
const siteUrl = import.meta.env.SITE || 'https://fx.kenyaforexfirm.com';
const organization = {
  name: 'Kenya Forex Firm',
  url: 'https://kenyaforexfirm.com',
};
export const site = {
  name: 'Best Forex Broker Reviews in Kenya | By Kenya Forex Firm',
  siteName: organization.name,
  schemaId: `${siteUrl}/#website`,
  audience: 'Forex Traders in Kenya',
  description:
    'Kenya Forex Firm brings you all the reviews that matter from the forex trading industry.',
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
