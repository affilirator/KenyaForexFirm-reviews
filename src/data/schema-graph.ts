export const Schemagraph = {


  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://fx.kenyaforexfirm.com/#organization",
      "name": "KenyaForexFirm.com",
      "alternateName": "Kenya Forex Firm",
      "url": "https://fx.kenyaforexfirm.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fx.kenyaforexfirm.com/images/logo.png"
      },
      "foundingDate": "2014",
      "founders": [
        {
          "@id": "https://fx.kenyaforexfirm.com/authors/patrick-mahinge"
        }
      ],
      "description": "KenyaForexFirm.com is Kenya’s leading authority on forex and CFD broker reviews, trading education, and market analysis. Our independent editorial team provides unbiased, data-driven insights to help Kenyan traders make informed decisions.",
      "sameAs": [
        "https://www.facebook.com/KenyaForexFirm",
        "https://twitter.com/KenyaForexFirm",
        "https://www.linkedin.com/company/kenyaforexfirm/",
        "https://www.youtube.com/@KenyaForexFirm",
        "https://www.instagram.com/kenyaforexfirm/"
      ],
      "publishingPrinciples": "https://fx.kenyaforexfirm.com/editorial-policy",
      "ownershipFundingInfo": "https://fx.kenyaforexfirm.com/affiliate-disclosure",
      "department": {
        "@id": "https://fx.kenyaforexfirm.com/#editorial-department"
      }
    },

    {
      "@type": "Organization",
      "@id": "https://fx.kenyaforexfirm.com/#editorial-department",
      "name": "KenyaForexFirm.com Editorial Department",
      "url": "https://fx.kenyaforexfirm.com/about",
      "member": [
        { "@id": "https://fx.kenyaforexfirm.com/authors/patrick-mahinge" },
        { "@id": "https://fx.kenyaforexfirm.com/authors/jane-wanjiku" },
        { "@id": "https://fx.kenyaforexfirm.com/authors/john-otieno" }
      ]
    },

    {
      "@type": "Person",
      "@id": "https://fx.kenyaforexfirm.com/authors/patrick-mahinge",
      "name": "Patrick Mahinge",
      "jobTitle": "Chief Editor & Senior Financial Analyst",
      "worksFor": { "@id": "https://fx.kenyaforexfirm.com/#organization" },
      "url": "https://fx.kenyaforexfirm.com/authors/patrick-mahinge",
      "image": "https://fx.kenyaforexfirm.com/images/authors/patrick-mahinge.jpg",
      "sameAs": [
        "https://www.linkedin.com/in/patrick-mahinge/",
        "https://twitter.com/patrickmahinge"
      ],
      "knowsAbout": ["forex brokers", "CFD trading", "financial education"]
    },

    {
      "@type": "Person",
      "@id": "https://fx.kenyaforexfirm.com/authors/jane-wanjiku",
      "name": "Jane Wanjiku",
      "jobTitle": "Senior Financial Analyst",
      "worksFor": { "@id": "https://fx.kenyaforexfirm.com/#organization" },
      "url": "https://fx.kenyaforexfirm.com/authors/jane-wanjiku",
      "image": "https://fx.kenyaforexfirm.com/images/authors/jane-wanjiku.jpg"
    },

    {
      "@type": "Person",
      "@id": "https://fx.kenyaforexfirm.com/authors/john-otieno",
      "name": "John Otieno",
      "jobTitle": "Contributor & Fact Checker",
      "worksFor": { "@id": "https://fx.kenyaforexfirm.com/#organization" },
      "url": "https://fx.kenyaforexfirm.com/authors/john-otieno",
      "image": "https://fx.kenyaforexfirm.com/images/authors/john-otieno.jpg"
    },

    {
      "@type": "WebPage",
      "@id": "https://fx.kenyaforexfirm.com/editorial-policy",
      "name": "Editorial Policy & Affiliate Disclosure",
      "url": "https://fx.kenyaforexfirm.com/editorial-policy",
      "about": {
        "@type": "CreativeWork",
        "name": "Editorial Independence and Fact-Checking Policy"
      },
      "publisher": { "@id": "https://fx.kenyaforexfirm.com/#organization" }
    },

    {
      "@type": "ItemList",
      "@id": "https://fx.kenyaforexfirm.com/#broker-reviews",
      "name": "Forex Broker Reviews",
      "itemListElement": [
        {
          "@type": "Review",
          "@id": "https://fx.kenyaforexfirm.com/brokers/ic-markets",
          "name": "IC Markets Kenya Review",
          "itemReviewed": {
            "@type": "FinancialService",
            "name": "IC Markets",
            "url": "https://www.icmarkets.com/"
          },
          "author": { "@id": "https://fx.kenyaforexfirm.com/authors/patrick-mahinge" },
          "publisher": { "@id": "https://fx.kenyaforexfirm.com/#organization" },
          "reviewBody": "Comprehensive analysis of IC Markets’ regulation, spreads, trading costs, and asset range for Kenyan traders."
        },
        {
          "@type": "Review",
          "@id": "https://fx.kenyaforexfirm.com/brokers/exness",
          "name": "Exness Kenya Review",
          "itemReviewed": {
            "@type": "FinancialService",
            "name": "Exness",
            "url": "https://www.exness.com/"
          },
          "author": { "@id": "https://fx.kenyaforexfirm.com/authors/jane-wanjiku" },
          "publisher": { "@id": "https://fx.kenyaforexfirm.com/#organization" },
          "reviewBody": "Detailed Exness broker review highlighting safety, assets, and trading conditions for Kenyan traders."
        }
      ],
      "publisher": { "@id": "https://fx.kenyaforexfirm.com/#organization" }
    }
  ]
}
