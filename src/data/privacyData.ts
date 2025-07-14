import { site } from './site';

export const privacyHero = {
  title: "Privacy Policy",
  subtitle: "How we collect, use, and protect your personal information",
  lastUpdated: 'July 15, 2025'
};

export const privacySections = [
  {
    id: "introduction",
    title: "Introduction"
  },
  {
    id: "information-collected",
    title: "Information We Collect"
  },
  {
    id: "use-of-information",
    title: "How We Use Your Information"
  },
  {
    id: "cookies",
    title: "Cookies and Tracking Technologies"
  },
  {
    id: "third-parties",
    title: "Third-Party Disclosure"
  },
  {
    id: "data-security",
    title: "Data Security"
  },
  {
    id: "user-rights",
    title: "Your Rights"
  },
  {
    id: "children",
    title: "Children's Privacy"
  },
  {
    id: "changes",
    title: "Changes to This Policy"
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
  "@id": `${site.url}/privacy/`,
  "name": "Privacy Policy - Kenya Forex Firm",
  "description": "Learn how Kenya Forex Firm collects, uses, and protects your personal information in compliance with data protection regulations.",
  "url": `${site.url}/privacy/`,
  "datePublished": "2025-07-15",
  "dateModified": new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
  "lastReviewed": new Date().toISOString(),
  "specialty": "Privacy Policy",
  "mainContentOfPage": {
    "@type": "WebPageElement",
    "isPartOf": {
      "@id": `${site.url}/#website`
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".privacy-intro"]
    }
  },
  "about": {
    "@type": "Thing",
    "name": "Data Privacy",
    "description": "Information about how personal data is collected and processed"
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