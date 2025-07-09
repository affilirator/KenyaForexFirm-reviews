// If you intended to use import.meta.env.SITE as a fallback, consider:
const siteUrl = import.meta.env.SITE || "https://fx.kenyaforexfirm.com";
const organization = 
    {
        name: "Kenya Forex Firm",
        url: "https://kenyaforexfirm.com",
    }



export const site = {
    name: 'Best Forex Broker Reviews in Kenya',
    siteName: organization.name,
    schemaId: `${siteUrl}/#Website`,
    audience: "Forex Traders",
    description: 'Kenya Forex Firm brings you all the reviews that matter from the forex trading industry.',
    url: siteUrl,
    currentYear: new Date().getFullYear(),
    canonicalURL: window.location.href,
    logoPath: "/favicon.svg",
    profiles: [
        {
            facebook: "https://twitter.com/kenyaforexfirm"
        },
        {
            twitter: "https://facebook.com/kenyaforexfirm"
        },

],
    address: {
        email: "support@kenyaforexfirm.com",
        city: "Nairobi",
        addressLocality: "Nairobi",
        state: "Nairobi",
        country: "Kenya",
        countryShortName: "KE",
        postalCode: "77001",
        streetAddress: "123 Industrial Drive",
        phone: "+254710251380",
    },
    organization: {
        name: organization.name,
        url: organization.url,
        id: `${organization.url}/#Organization`
    },
    //org: organization,
    
}
//export const email= site.address.emailAddress