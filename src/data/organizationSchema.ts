import { site } from "@data/site";

export const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${site.url}/#Organization`,
        "name": site.name,
        "url": site.url,
        "logo": site.logoPath ,
        "description": site.description,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": site.address.countryShortName,
          "addressRegion": site.address.country,
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": site.address.email
        },
        "sameAs": site.profiles.map(profile => {
            if ('facebook' in profile) {
                return profile.facebook;
            }
            if ('twitter' in profile) {
                return profile.twitter;
            }
            }).filter(Boolean)

      };