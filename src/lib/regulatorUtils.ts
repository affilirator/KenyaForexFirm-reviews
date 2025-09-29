/**
 * Utility functions for regulator data
 */
import type { RegulatorPage } from '../types/regulator';

/**
 * Generate metadata for a regulator page
 */
export function generateRegulatorMetadata(regulatorData: RegulatorPage) {
  return {
    title: regulatorData.title,
    description:
      regulatorData.heroSection.subheading ||
      `Learn about ${regulatorData.title} - regulations, requirements, and benefits for forex traders.`,
    openGraph: {
      title: regulatorData.title,
      description:
        regulatorData.heroSection.subheading ||
        `Learn about ${regulatorData.title} - regulations, requirements, and benefits for forex traders.`,
      type: 'article',
      url: `/regulators/${regulatorData.slug}`,
      image: regulatorData.heroSection.heroImage?.url || '',
    },
    twitter: {
      card: 'summary_large_image',
      title: regulatorData.title,
      description:
        regulatorData.heroSection.subheading ||
        `Learn about ${regulatorData.title} - regulations, requirements, and benefits for forex traders.`,
      image: regulatorData.heroSection.heroImage?.url || '',
    },
    author: regulatorData.relationships.author.name,
  };
}

/**
 * Format a regulator's data for display
 */
export function formatRegulatorData(regulatorData: RegulatorPage) {
  // Add any data transformation logic here
  return {
    ...regulatorData,
    // Example transformation: ensure all sections have IDs
    sections: regulatorData.sections.map((section) => ({
      ...section,
      sectionId:
        section.sectionId ||
        section.sectionTitle.toLowerCase().replace(/\s+/g, '-'),
    })),
  };
}
