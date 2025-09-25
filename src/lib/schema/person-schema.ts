import { fetchSiteConfig } from "../site-config"

const site = await fetchSiteConfig()

export const personSchema = {
    "@context": 'https://schema.org',
    '@type': 'Person',
    "@id": 'https://fx.mahinge.com/#patrick-mahinge',
    
    name: 'Patrick Mahinge',
    url: 'https://fx.mahinge.com/about/patrick-mahinge',
    image: 'https://assets.mahinge.com/patrick-mahinge-forex-trader.png',
    "jobTitle": "Senior Financial Analyst - Chartered Market Technician",
    sameAs: [
        'https://www.linkedin.com/in/patrickmahinge/',
        'https://x.com/kenyaforexfirm',
        'https://www.facebook.com/patrickmahinge/',
        'https://kenyaforexfirm.com/authors/patrick-mahinge/',
        "https://wordpress.tv/2017/01/25/patrick-mahinge-building-niche-blogs-from-scratch/"
    ],
    hasCredential: [
        {
            '@type': 'EducationalOccupationalCredential',
            name: 'Chartered Market Technician (CMT)',
            description: 'A professional designation for technical analysts, awarded by the CMT Association.',
            url: 'https://cmtassociation.org/',
        
        },
        {
            '@type': 'EducationalOccupationalCredential',
            name: `Bachelor's of Journalism and Mass Communication`,
            description: `A Bachelor's degree in Journalism and Mass Communication equips learners with skills in reporting, writing, editing, public relations, and digital media to work in various media and communication fields.`,
            credentialCategory: {
                '@type': 'DefinedTerm',
                name: `Bachelor's Degree`,
                '@id': 'https://purl.org/ctdl/terms/BachelorDegree',
                "inDefinedTermSet": {
                "@type": "DefinedTermSet",
                "@id": "http://purl.org/ctdl/terms/",
                "name": "Credential Transparency Description Language"
            }
            },

        },
        {
            '@type': 'EducationalOccupationalCredential',
            name: 'Chartered Financial Analyst (CFA)',
            description: 'The Chartered Financial Analyst program is a postgraduate professional certification offered internationally by the US-based CFA Institute to investment and financial professionals.',
            url: 'https://www.cfainstitute.org/programs/private-markets',

        },
    ],
    knowsAbout:[ {
        "@type": "DefinedTerm",
        "name": "Forex Trading",
        "inDefinedTermSet": "https://en.wikipedia.org/wiki/Category:Foreign_exchange_market",
        "url": "https://en.wikipedia.org/wiki/Foreign_exchange_market",

    },
    {
        "@type": "DefinedTerm",
        "name": "Technical Analysis",
        "inDefinedTermSet": "https://en.wikipedia.org/wiki/Category:Technical_analysis",
        "url": "https://en.wikipedia.org/wiki/Technical_analysis",

    },
    {
        "@type": "DefinedTerm",
        "name": "Trading Strategies",
        "inDefinedTermSet": "https://en.wikipedia.org/wiki/Category:Financial_technical_analysis",
        "url": "https://en.wikipedia.org/wiki/Trading_strategy",
    },
    {
        "@type": "DefinedTerm",
        "name": "Kenyan Markets",
        "inDefinedTermSet": "https://en.wikipedia.org/wiki/Economy_of_Kenya",
        "url": "https://en.wikipedia.org/wiki/Economy_of_Kenya",
    },
    {
        "@type": "DefinedTerm",
        "name": "Investment",
        "inDefinedTermSet": "https://en.wikipedia.org/wiki/Category:Investment",
        "url": "https://en.wikipedia.org/wiki/Investment",
    },
    {
        "@type": "DefinedTerm",
        "name": "Forex Trading",
        "inDefinedTermSet": "https://en.wikipedia.org/wiki/Category:Foreign_exchange_market",
        "url": "https://en.wikipedia.org/wiki/Foreign_exchange_market",
    }
    
]
    }