import { site } from './site';

export const termsHero = {
  title: "Terms of Service",
  subtitle: "Please read these terms carefully before using our website",
  lastUpdated: "January 15, 2024"
};

export const termsSections = [
  {
    id: "agreement",
    title: "Agreement to Terms"
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights"
  },
  {
    id: "user-representations",
    title: "User Representations"
  },
  {
    id: "prohibited-activities",
    title: "Prohibited Activities"
  },
  {
    id: "user-content",
    title: "User Generated Content"
  },
  {
    id: "reviews",
    title: "Review Guidelines"
  },
  {
    id: "third-party-websites",
    title: "Third-Party Websites and Content"
  },
  {
    id: "site-management",
    title: "Site Management"
  },
  {
    id: "disclaimer",
    title: "Disclaimer"
  },
  {
    id: "limitations",
    title: "Limitations of Liability"
  },
  {
    id: "indemnification",
    title: "Indemnification"
  },
  {
    id: "term-termination",
    title: "Term and Termination"
  },
  {
    id: "modifications",
    title: "Modifications and Interruptions"
  },
  {
    id: "governing-law",
    title: "Governing Law"
  },
  {
    id: "dispute-resolution",
    title: "Dispute Resolution"
  },
  {
    id: "corrections",
    title: "Corrections"
  },
  {
    id: "contact",
    title: "Contact Us"
  }
];

export const contactInfo = {
  email: site.address.email,
  companyName: site.siteName,
  address: {
    street: site.address.streetAddress,
    city: site.address.city,
    country: site.address.country
  }
};

export const schemaData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Terms of Service - Kenya Forex Firm",
  "description": "Terms and conditions governing the use of Kenya Forex Firm's website and services. Read our legal terms before using our forex broker review platform.",
  "url": `${site.url}/terms/`,
  "lastReviewed": termsHero.lastUpdated,
  "specialty": "Terms of Service",
  "mainContentOfPage": {
    "@type": "WebPageElement",
    "isPartOf": {
      "@id": `${site.url}/#website`
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".terms-intro"]
    }
  },
  "about": {
    "@type": "Thing",
    "name": "Legal Terms",
    "description": "Terms and conditions governing website usage"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Forex Traders"
  },
  "publisher": {
    "@type": "Organization",
    "name": site.siteName,
    "logo": {
      "@type": "ImageObject",
      "url": `${site.url}${site.logoPath}`
    }
  }
};