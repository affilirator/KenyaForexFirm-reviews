import { site } from './site';

export const contactHero = {
  title: "Contact Us",
  subtitle: "Get in touch with our team for broker partnerships, review requests, or trading assistance."
};

export const contactInfo = {
  email: site.address.email,
  phone: site.address.phone,
  address: {
    street: site.address.streetAddress,
    city: site.address.city,
    country: site.address.country
  },
  socialLinks: {
    twitter: site.profiles.find(p => 'twitter' in p)?.twitter,
    facebook: site.profiles.find(p => 'facebook' in p)?.facebook
  }
};

export const brokerCTA = {
  title: "Partner With Us",
  description: "Are you a forex broker looking to reach Kenyan traders? Our platform offers targeted exposure to Kenya's growing forex trading community through comprehensive reviews, banner placements, and featured listings.",
  buttonText: "Become a Partner",
  buttonLink: "#contactForm"
};

export const traderCTA = {
  title: "Need Help With Forex Trading?",
  description: "Our team of expert analysts can help you choose the right broker, understand trading conditions, or resolve issues with your current broker.",
  buttonText: "Get Trading Support",
  buttonLink: "#contactForm"
};

export const contactFAQs = [
  {
    question: "How can a broker get reviewed on your platform?",
    answer: "Brokers can request a review by filling out our contact form. Our team conducts thorough evaluations using real trading accounts and publishes unbiased reviews based on our methodology."
  },
  {
    question: "Do you offer advertising opportunities for forex brokers?",
    answer: "Yes, we offer various advertising options including banner placements, featured listings, and sponsored content. Contact us for our media kit and pricing."
  },
  {
    question: "How long does it take to get a response?",
    answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our office directly."
  },
  {
    question: "Can you help with broker disputes?",
    answer: "Yes, we offer mediation services for Kenyan traders experiencing issues with brokers. Please provide all relevant details in your message for faster assistance."
  },
  {
    question: "Do you provide consulting services for forex brokers?",
    answer: "We offer consulting services for brokers looking to enter the Kenyan market, including regulatory guidance, market research, and localization strategies."
  }
];

export const schemaData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${site.url}/contact/`,
  "name": "Contact Kenya Forex Firm",
  "description": "Contact our team for broker partnerships, review requests, or trading assistance. We're here to help Kenyan forex traders and international brokers.",
  "url": `${site.url}/contact/`,
  "potentialAction": {
    "@type": "ContactAction",
    "target": `${site.url}/contact/`,
    "query-input": "required name email message"
  },
  "publisher": {
    "@type": "Organization",
    "@id": `${site.organization.url}/#organization`,
    "name": site.siteName,
    "logo": {
      "@type": "ImageObject",
      "url": `${site.url}${site.logoPath}`
    }
  },
  "mainEntity": {
    "@type": "Organization",
    "@id": `${site.organization.url}/#organization`,
    "name": site.siteName,
    "url": site.organization.url,
    "logo": `${site.url}${site.logoPath}`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": site.address.phone,
      "contactType": "customer service",
      "email": site.address.email,
      "availableLanguage": ["English", "Swahili"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": site.address.streetAddress,
      "addressLocality": site.address.city,
      "addressRegion": site.address.state,
      "postalCode": site.address.postalCode,
      "addressCountry": site.address.countryShortName
    },
    "sameAs": [
      site.profiles.find(p => 'twitter' in p)?.twitter,
      site.profiles.find(p => 'facebook' in p)?.facebook
    ].filter(Boolean)
  },
  "mainContentOfPage": {
    "@type": "WebPageElement",
    "isPartOf": {
      "@id": `${site.url}/#website`
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".contact-intro"]
    }
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", ".contact-intro"]
  }
};