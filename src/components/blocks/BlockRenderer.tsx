import React from 'react';
import { HeroBlock } from './HeroBlock';
import { StatsBlock } from './StatsBlock';
import { TestimonialBlock } from './TestimonialBlock';
import { FeatureComparisonBlock } from './FeatureComparisonBlock';
import { CallToActionBlock } from './CallToActionBlock';
import { EmphasisBlock } from './EmphasisBlock';
import { ContentOverviewBlock } from './ContentOverviewBlock';
import { ConclusionBlock } from './ConclusionBlock';
import RichText from '../common/RichText';

interface Block {
  blockType: string;
  [key: string]: any;
}

interface BlockRendererProps {
  blocks: Block[];
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.blockType) {
          case 'hero':
            return (
              <HeroBlock
                key={index}
                {...block}
              />
            );

          case 'stats':
            return (
              <StatsBlock
                key={index}
                {...block}
              />
            );

          case 'testimonial':
            return (
              <TestimonialBlock
                key={index}
                {...block}
              />
            );

          case 'featureComparison':
            return (
              <FeatureComparisonBlock
                key={index}
                {...block}
              />
            );

          case 'callToAction':
            return (
              <CallToActionBlock
                key={index}
                {...block}
              />
            );

          case 'emphasis':
            return (
              <EmphasisBlock
                key={index}
                {...block}
              />
            );

          case 'contentOverview':
            return (
              <ContentOverviewBlock
                key={index}
                {...block}
              />
            );

          case 'conclusion':
            return (
              <ConclusionBlock
                key={index}
                {...block}
              />
            );

          case 'richTextBlock':
            return (
              <RichText
                key={index}
                content={block.content}
              />
            );

          default:
            console.warn(`Unknown block type: ${block.blockType}`);
            return null;
        }
      })}
    </>
  );
};

export default BlockRenderer;
