# Modular Broker Review System

most of this is deprcated

This document outlines the modular Astro component system for creating SEO-optimized broker review pages with EEAT compliance and proper schema markup.

## Architecture Overview

The system consists of modular components that can be combined to create comprehensive broker review pages. All data is fetched from PayloadCMS API.

## Core Components - frontend

### 1. BrokerHeader.astro
- Displays broker logo, name, rating, and key metrics
- Includes quick action sidebar with CTA buttons
- Shows key features and badges (CMA approved, etc.)

### 2. BrokerNavigation.astro
- Sticky navigation with scroll spy functionality
- Customizable sections
- Smooth scrolling to sections

### 3. BrokerOverview.astro
- Auto-generates overview content based on broker data
- Accepts custom content via props
- Highlights key broker features and benefits

### 4. BrokerRegulation.astro
- Displays regulatory licenses and safety features
- Shows compliance badges and certifications
- Handles multiple regulation entries

### 5. BrokerProsAndCons.astro
- Auto-generates pros/cons from broker data
- Accepts custom pros/cons lists
- Visual green/red styling for advantages/disadvantages

### 6. BrokerVerdict.astro
- Final assessment with rating breakdown
- Auto-generates verdict or accepts custom content
- Includes CTA buttons for user actions

### 7. RiskWarning.astro
- Compliance risk warning footer
- Customizable warning text
- Required for financial service reviews

## Dynamic Page System

### Main Dynamic Page: `/src/pages/brokers/[slug].astro`
- Fetches broker data from PayloadCMS by slug
- Generates static paths for all published brokers
- Includes comprehensive SEO optimization
- Implements full schema markup for EEAT

### API Integration: `/src/lib/qs-esm.ts`
- `getReviews()` - Fetch all published broker reviews
- `getReviewById(id)` - Fetch single broker by ID
- `getReviewBySlug(slug)` - Fetch single broker by slug

## SEO & EEAT Features

### Schema Markup
- Review schema with author credentials
- Breadcrumb navigation schema
- FAQ schema for common questions
- Organization schema for publisher
- Financial service schema for broker

### EEAT Compliance
- **Expertise**: Author credentials and job titles
- **Experience**: Detailed review methodology
- **Authoritativeness**: Organization information and contact details
- **Trustworthiness**: Regulatory information and risk warnings

### SEO Optimization
- Dynamic meta titles and descriptions
- Proper heading structure (H1, H2, H3)
- Internal linking to related pages
- Image optimization with alt text
- Canonical URLs and structured data

## Usage Examples

### Basic Dynamic Page
```astro
---
import { getReviewBySlug } from '../../lib/qs-esm';
import BrokerHeader from '../../components/review/BrokerHeader.astro';
// ... other imports

const { slug } = Astro.params;
const broker = await getReviewBySlug(slug);
---

<BaseLayout title={`${broker.brokerName} Review`}>
  <BrokerHeader broker={broker} />
  <BrokerOverview broker={broker} />
  <!-- ... other components -->
</BaseLayout>
```

### Custom Content Override
```astro
---
const customPros = ["Custom advantage 1", "Custom advantage 2"];
const customVerdict = "<p>Custom verdict content...</p>";
---

<BrokerProsAndCons broker={broker} pros={customPros} />
<BrokerVerdict broker={broker} verdict={customVerdict} />
```

## Data Structure

The system expects broker data with the following structure:

```typescript
interface BrokerProps {
  id: string;
  brokerName: string;
  slug: string;
  brokerRating: number;
  minDeposit?: number;
  maxLeverage?: string;
  spread?: string | number;
  regulation?: Regulation[];
  platforms?: string[];
  paymentMethods?: string[];
  cmaApproved?: boolean;
  // ... other fields
}
```

## Customization

### Adding New Sections
1. Create new component in `/src/components/review/`
2. Add section to navigation array
3. Include component in main page template

### Custom Schema
Use `/src/utils/schemaGenerator.ts` to generate additional schema types:
- `generateBrokerReviewSchema(broker)`
- `generateBreadcrumbSchema(broker)`
- `generateFAQSchema(broker)`

### Styling
All components use Tailwind CSS with the existing design system:
- Neutral color palette with primary/accent gradients
- Backdrop blur effects and glass morphism
- Responsive grid layouts
- Hover animations and transitions

## Performance Considerations

- Static generation for all broker pages
- Optimized images with proper sizing
- Minimal JavaScript for navigation
- Efficient CSS with Tailwind purging
- Structured data for faster indexing

## Compliance Features

- Risk warnings on all financial content
- Regulatory information display
- Author credentials and expertise
- Contact information and transparency
- Proper disclosure of affiliate relationships

This modular system ensures consistent, SEO-optimized, and compliant broker review pages while maintaining flexibility for customization.