

const res = await fetch('https://fx.mahinge.com/api/globals/site-config')

const site = await res.json()
export const websiteSchema = {
    '@context': 'https://schema.org',
    "@id": site.siteUrl + '/#website',
    '@type': 'WebSite',
    name: 'MahingeFx',
    url: site.siteUrl,
    description: site.siteDescription,
    //inLanguage: site.languages.map((lang) => lang.code),
    potentialAction: {
      '@type': 'SearchAction',
      target: site.siteUrl + '/{search_term_string}',
      'query-input': 'required name=search_term_string'
    },
    
}