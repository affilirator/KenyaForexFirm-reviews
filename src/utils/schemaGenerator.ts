import type { BrokerProps } from '../types';
import { site } from '../data/site';

export function generateBrokerReviewSchema(broker: BrokerProps) {
  const logoUrl = typeof broker.logo === 'string' ? broker.logo : broker.logo?.url;
  
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "FinancialService",
      "@id": `${site.url}/brokers/${broker.slug}/#FinancialService`,
      "name": broker.brokerName,
      "description": `${broker.brokerName} is a ${broker.category || 'forex and CFD'} broker offering trading services${broker.cmaApproved ? ' with CMA approval for Kenyan clients' : ' to international clients'}.`,
      "url": `${site.url}/brokers/${broker.slug}/`,
      "logo": logoUrl,
      "address": broker.headquarters ? {
        "@type": "PostalAddress",
        "addressLocality": broker.headquarters
      } : undefined,
      "foundingDate": broker.founded ? `${broker.founded}-01-01` : undefined,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": broker.brokerRating,
        "bestRating": 10,
        "worstRating": 1,
        "ratingCount": 1
      },
      "offers": broker.minDeposit ? {
        "@type": "Offer",
        "name": "Trading Account",
        "price": broker.minDeposit,
        "priceCurrency": "USD",
        "description": `Minimum deposit of $${broker.minDeposit}`
      } : undefined
    },
    "author": {
      "@type": "Person",
      "name": "Kenya Forex Review Team",
      "jobTitle": "Senior Financial Analyst",
      "worksFor": {
        "@type": "Organization",
        "name": site.siteName,
        "url": site.url
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": site.siteName,
      "url": site.url,
      "logo": {
        "@type": "ImageObject",
        "url": `${site.url}${site.logoPath}`
      }
    },
    "datePublished": new Date().toISOString().split('T')[0],
    "dateModified": new Date().toISOString().split('T')[0],
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": broker.brokerRating,
      "bestRating": 10,
      "worstRating": 1
    },
    "reviewBody": `Our comprehensive review of ${broker.brokerName} covers all aspects important to Kenyan traders including regulation, trading costs, platform features, and customer support.`
  };
}

export function generateBreadcrumbSchema(broker: BrokerProps) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": site.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Broker Reviews",
        "item": `${site.url}/brokers/`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${broker.brokerName} Review`,
        "item": `${site.url}/brokers/${broker.slug}/`
      }
    ]
  };
}

export function generateFAQSchema(broker: BrokerProps) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Is ${broker.brokerName} regulated?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": broker.regulation && broker.regulation.length > 0 
            ? `Yes, ${broker.brokerName} is regulated by ${broker.regulation.map(reg => reg.name).join(', ')}.`
            : `${broker.brokerName} regulatory information is not fully available in our database.`
        }
      },
      {
        "@type": "Question", 
        "name": `What is the minimum deposit for ${broker.brokerName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": broker.minDeposit 
            ? `The minimum deposit for ${broker.brokerName} is $${broker.minDeposit}.`
            : `Minimum deposit information for ${broker.brokerName} varies by account type.`
        }
      },
      {
        "@type": "Question",
        "name": `Is ${broker.brokerName} suitable for Kenyan traders?`,
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": broker.cmaApproved
            ? `Yes, ${broker.brokerName} is CMA approved and specifically caters to Kenyan traders with local payment methods.`
            : `${broker.brokerName} accepts international clients, though specific Kenyan regulatory approval may vary.`
        }
      }
    ]
  };
}

export function generateAuthorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kenya Forex Review Team",
    "jobTitle": "Senior Financial Analyst",
    "worksFor": {
      "@type": "Organization",
      "name": site.siteName,
      "url": site.url,
      "description": site.description,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": site.address.countryShortName,
        "addressRegion": site.address.country,
        "addressLocality": site.address.city
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": site.address.email
      }
    },
    "knowsAbout": [
      "Forex Trading",
      "Financial Markets",
      "Broker Analysis",
      "Risk Management",
      "Regulatory Compliance"
    ],
    "hasCredential": "Financial Analysis Certification"
  };
}