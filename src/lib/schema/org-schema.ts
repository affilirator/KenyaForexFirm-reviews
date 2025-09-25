

const siteRes = await fetch('https://fx.mahinge.com/api/globals/site-config');
const site = await siteRes.json()
const siteName = site.siteTitle || 'MahingeFX';
const siteUrl = site.siteUrl || 'https://fx.mahinge.com';

export const orgSchema = {
  "@context": 'https://schema.org',
    '@type': 'Organization',
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    logo: {
        '@type': 'ImageObject',
        url: siteUrl + '/logo.png' || site.logo,
        width: 1024,
        height: 1024,
    
    },
   //founder: personSchema,
   brand: {
        "@type": "Brand",
        "@id": `${site.siteUrl}/#kenyaforexfirm`,
        "name": 'Kenya Forex Firm',
        "url": 'https://kenyaforexfirm.com',
        //description: siteConfig.siteDescription,
        "sameAs": [
          'https://kenyaforexfirm.com',
          'https://www.facebook.com/kenyaforexfirm',
          'https://twitter.com/kenyaforexfirm',
          'https://www.instagram.com/kenyaforexfirm/',
          'https://www.linkedin.com/company/kenyaforexfirm/'
        ],
        
      }
   

}