/**
 * Utility to transform regulator API data into the format expected by our components
 */
import type { Regulator, RegulatorPage, RichText } from '../types/regulator';

/**
 * Convert a plain text string to a RichText object
 */
function textToRichText(text: string): RichText {
  return {
    root: {
      children: [
        {
          children: [
            {
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: text,
              type: "text",
              version: 1
            }
          ],
          direction: "ltr",
          format: "",
          indent: 0,
          type: "paragraph",
          version: 1,
          textFormat: 0,
          textStyle: ""
        }
      ],
      direction: "ltr",
      format: "",
      indent: 0,
      type: "root",
      version: 1
    }
  };
}

/**
 * Transform regulator data from the API into the format expected by our components
 */
export function transformRegulatorData(regulator: Regulator): RegulatorPage {
  // Create sections from regulator data
  const sections = [];
  
  // About section
  sections.push({
    sectionTitle: "About the Regulator",
    sectionId: "about-regulator",
    content: textToRichText(regulator.description),
    imagePosition: "right",
    featuredImage: regulator.logo ? {
      url: regulator.logo.url,
      alt: `${regulator.name} logo`
    } : undefined
  });
  
  // Requirements section if available
  if (regulator.brokerRequirements && regulator.brokerRequirements.length > 0) {
    sections.push({
      sectionTitle: "Broker Requirements",
      sectionId: "requirements",
      content: textToRichText("Requirements for brokers regulated by " + regulator.name),
      keyPoints: regulator.brokerRequirements.map(req => ({
        point: req
      }))
    });
  }
  
  // Investor protection section if available
  if (regulator.investorProtection && regulator.investorProtection.length > 0) {
    sections.push({
      sectionTitle: "Investor Protections",
      sectionId: "protections",
      content: textToRichText("Protections offered to investors by " + regulator.name),
      keyPoints: regulator.investorProtection.map(protection => ({
        point: protection
      }))
    });
  }
  
  // Key regulations section if available
  if (regulator.keyRegulation && regulator.keyRegulation.length > 0) {
    sections.push({
      sectionTitle: "Key Regulations",
      sectionId: "key-regulations",
      content: textToRichText("Key regulations enforced by " + regulator.name),
      keyPoints: regulator.keyRegulation.map(reg => ({
        point: `${reg.regulation}: ${reg.description}`
      }))
    });
  }
  
  // Create FAQ section if available
  const faqSection = regulator.faqs && regulator.faqs.length > 0 ? {
    sectionTitle: "Frequently Asked Questions",
    sectionId: "faq",
    introduction: textToRichText("Common questions about " + regulator.name),
    faqItems: regulator.faqs.map(faq => ({
      question: faq.question || "",
      answer: textToRichText(faq.answer || "")
    }))
  } : undefined;
  
  // Create conclusion section
  const conclusionSection = {
    sectionTitle: "Conclusion",
    sectionId: "conclusion",
    content: textToRichText(`${regulator.name} (${regulator.shortName}) is a regulatory authority based in ${regulator.country}. Established in ${regulator.established}, it oversees financial markets and provides oversight for forex brokers operating in the region.`)
  };
  
  // Create related content
  const relatedContent = {
    sectionTitle: "Related Content",
    articles: []
  };
  
  // Create relationships
  const relationships = {
    regulatedBrokers: [],
    author: {
      slug: "admin",
      name: "Admin",
      id: "admin"
    }
  };
  
  return {
    title: `${regulator.name} (${regulator.shortName}) - Forex Regulation Guide`,
    slug: regulator.slug,
    heroSection: {
      heading: regulator.name,
      subheading: `${regulator.shortName} Regulation Guide for Forex Traders`,
      introduction: textToRichText(regulator.description),
      heroImage: regulator.logo ? {
        url: regulator.logo.url,
        alt: `${regulator.name} logo`
      } : undefined
    },
    sections,
    faqSection,
    conclusionSection,
    relatedContent,
    relationships,
    id: regulator.id
  };
}