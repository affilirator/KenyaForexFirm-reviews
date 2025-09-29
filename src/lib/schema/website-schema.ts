import { fetchSiteConfig } from "../qs-esm";

const site = await fetchSiteConfig()

export const websiteSchema = {
    '@context': 'https://schema.org',
    "@id": site.siteUrl + '/#website',
    '@type': 'WebSite',
    name: 'Kenya Forex Firm',
    url: site.siteUrl,
    description: site.siteDescription,
    //inLanguage: site.languages.map((lang) => lang.code),
    potentialAction: {
      '@type': 'SearchAction',
      target: site.siteUrl + '/{search_term_string}',
      'query-input': 'required name=search_term_string'
    },
    
}