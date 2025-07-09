const siteUrl = 'https://fx.kenyaforexfirm.com';
const siteName = "Kenya Forex Firm";
export const site = {
    name: 'Best Forex Broker Reviews in Kenya',
    siteName: siteName,
    audience: "Forex Traders",
    description: 'Kenya Forex Firm brings you all the reviews that matter from the forex trading industry.',
    url: import.meta.env.SITE,
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
    }
    
}
//export const email= site.address.emailAddress