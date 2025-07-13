# Component Library Documentation

## Overview
This document provides comprehensive documentation for all Astro components in the Kenya Forex Firm review website. Each component is designed to be modular, reusable, and optimized for performance.

## Core Types

### BrokerProps
```typescript
interface BrokerProps {
  id: string;
  brokerName: string;
  brokerRating: number;
  slug: string;
  minDeposit?: number;
  maxLeverage?: string;
  spread?: string | number;
  commission?: string | number;
  cmaApproved: boolean;
  islamicAccount: boolean;
  bonusAvailable?: boolean;
  logo?: string | Logo;
  regulation?: Regulation[];
  platforms?: string[];
  paymentMethods?: string[];
  features?: string[];
  // ... additional properties
}
```

---

## Layout Components

### BaseLayout
**File:** `src/layouts/BaseLayout.astro`

Main layout wrapper providing SEO, fonts, and global styling.

#### Props
```typescript
interface Props {
  title: string;           // Page title
  description: string;     // Meta description
  image?: string;         // OG image URL
  noindex?: boolean;      // Prevent indexing
  schemaData?: any;       // JSON-LD schema
}
```

#### Usage
```astro
<BaseLayout 
  title="Page Title" 
  description="Page description"
  schemaData={schemaMarkup}
>
  <slot />
</BaseLayout>
```

---

## Review Components

### BrokerCard
**File:** `src/components/review/BrokerCard.astro`

Displays broker information in a card format with rating, key metrics, and CTA buttons.

#### Props
```typescript
interface Props {
  broker: BrokerProps;    // Broker data object
  index: number;          // Position in list (for ranking)
}
```

#### Features
- Responsive design (mobile-first)
- Rating display with stars
- Key metrics grid (deposit, spread, leverage)
- CMA approval badge
- Hover animations
- Compare functionality

#### Usage
```astro
<BrokerCard broker={brokerData} index={0} />
```

### BrokerHeader
**File:** `src/components/review/BrokerHeader.astro`

Hero section for individual broker review pages.

#### Props
```typescript
interface Props {
  broker: BrokerProps;    // Broker data object
}
```

#### Features
- Logo display with fallback
- Rating visualization
- Key metrics overview
- Quick action sidebar
- Responsive layout

#### Usage
```astro
<BrokerHeader broker={brokerData} />
```

### BrokerNavigation
**File:** `src/components/review/BrokerNavigation.astro`

Sticky navigation for broker review sections with scroll spy.

#### Props
```typescript
interface Props {
  sections?: string[];    // Array of section IDs
}
```

#### Default Sections
- overview
- regulation
- accounts
- platforms
- spreads
- payments
- pros-cons

#### Usage
```astro
<BrokerNavigation sections={['overview', 'regulation', 'verdict']} />
```

### BrokerOverview
**File:** `src/components/review/BrokerOverview.astro`

Overview section with auto-generated or custom content.

#### Props
```typescript
interface Props {
  broker: BrokerProps;    // Broker data object
  content?: string;       // Custom HTML content
}
```

#### Features
- Auto-generates content from broker data
- Accepts custom HTML content
- Responsive typography
- Glass morphism styling

#### Usage
```astro
<!-- Auto-generated content -->
<BrokerOverview broker={brokerData} />

<!-- Custom content -->
<BrokerOverview broker={brokerData} content="<p>Custom content...</p>" />
```

### BrokerRegulation
**File:** `src/components/review/BrokerRegulation.astro`

Displays regulatory information and safety features.

#### Props
```typescript
interface Props {
  broker: BrokerProps;    // Broker data object
}
```

#### Features
- Regulatory licenses display
- Safety features checklist
- Handles multiple regulations
- Empty state for missing data

#### Usage
```astro
<BrokerRegulation broker={brokerData} />
```

### BrokerProsAndCons
**File:** `src/components/review/BrokerProsAndCons.astro`

Displays advantages and disadvantages with auto-generation capability.

#### Props
```typescript
interface Props {
  broker: BrokerProps;    // Broker data object
  pros?: string[];        // Custom pros list
  cons?: string[];        // Custom cons list
}
```

#### Auto-Generated Pros
- CMA approval status
- Low minimum deposit
- High leverage availability
- Strong regulatory oversight
- M-Pesa support
- Islamic account availability

#### Usage
```astro
<!-- Auto-generated -->
<BrokerProsAndCons broker={brokerData} />

<!-- Custom lists -->
<BrokerProsAndCons 
  broker={brokerData} 
  pros={["Custom pro 1", "Custom pro 2"]}
  cons={["Custom con 1", "Custom con 2"]}
/>
```

### BrokerVerdict
**File:** `src/components/review/BrokerVerdict.astro`

Final assessment with ratings and call-to-action.

#### Props
```typescript
interface Props {
  broker: BrokerProps;     // Broker data object
  overallRating?: number;  // Overall rating (default: brokerRating/2)
  regulationScore?: number; // Regulation score (default: auto-calculated)
  costScore?: number;      // Cost score (default: auto-calculated)
  supportScore?: number;   // Support score (default: 8.0)
  verdict?: string;        // Custom verdict HTML
}
```

#### Features
- Rating breakdown display
- Auto-generated verdict text
- Custom verdict support
- CTA buttons
- Responsive design

#### Usage
```astro
<BrokerVerdict 
  broker={brokerData}
  verdict="<p>Custom verdict...</p>"
/>
```

### RiskWarning
**File:** `src/components/review/RiskWarning.astro`

Compliance risk warning footer.

#### Props
```typescript
interface Props {
  customWarning?: string;  // Custom warning text
}
```

#### Usage
```astro
<RiskWarning />
<RiskWarning customWarning="Custom risk warning text" />
```

---

## List Components

### BrokerList
**File:** `src/components/BrokerList.astro`

Displays filtered list of brokers with grid layout.

#### Props
```typescript
interface Props {
  brokers: BrokerProps[];  // Array of broker objects
  title: string;           // Page title
  description?: string;    // Page description
}
```

#### Features
- Responsive grid layout
- Broker count display
- Empty state handling
- Uses BrokerCard component

#### Usage
```astro
<BrokerList 
  brokers={filteredBrokers}
  title="Best CMA Approved Brokers"
  description="Trade with confidence using regulated brokers"
/>
```

---

## Navigation Components

### Navigation
**File:** `src/components/Navigation.astro`

Main site navigation header.

#### Features
- Responsive design
- Mobile menu
- Brand logo
- Navigation links

### Footer
**File:** `src/components/Footer.astro`

Site footer with links and information.

---

## Section Components

### Hero
**File:** `src/components/Hero.astro`

Homepage hero section.

### TopBrokers
**File:** `src/components/sections/TopBrokers.astro`

Displays top-rated brokers section.

### LatestInsights
**File:** `src/components/sections/LatestInsights.astro`

Latest blog posts or insights section.

### WhyTrustUs
**File:** `src/components/sections/WhyTrustUs.astro`

Trust indicators and credibility section.

---

## Styling Guidelines

### CSS Classes
- `.btn-primary` - Primary button styling
- `.card-glass` - Glass morphism card effect
- `.text-gradient` - Gradient text effect
- `.prose-custom` - Custom prose styling

### Font Families
- `font-sans` - Source Sans 3 (body text)
- `font-display` - Playfair Display (headings)
- `font-ui` - Roboto (UI elements)
- `font-serif` - EB Garamond (prose content)

### Color Palette
- `primary-*` - Blue gradient colors
- `accent-*` - Purple gradient colors
- `neutral-*` - Gray scale colors

---

## Best Practices

### Component Usage
1. **Always provide required props** - Check TypeScript interfaces
2. **Use semantic HTML** - Components output proper HTML structure
3. **Test responsive behavior** - All components are mobile-first
4. **Leverage auto-generation** - Many components auto-generate content from data

### Performance
1. **Components are optimized** for static generation
2. **Images use proper alt text** and lazy loading
3. **CSS is optimized** with Tailwind purging
4. **Fonts are locally hosted** for better performance

### Accessibility
1. **Proper heading hierarchy** (h1, h2, h3)
2. **ARIA labels** where appropriate
3. **Keyboard navigation** support
4. **Color contrast** meets WCAG guidelines

---

## Examples

### Complete Broker Review Page
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import BrokerHeader from '../components/review/BrokerHeader.astro';
import BrokerNavigation from '../components/review/BrokerNavigation.astro';
import BrokerOverview from '../components/review/BrokerOverview.astro';
import BrokerRegulation from '../components/review/BrokerRegulation.astro';
import BrokerProsAndCons from '../components/review/BrokerProsAndCons.astro';
import BrokerVerdict from '../components/review/BrokerVerdict.astro';
import RiskWarning from '../components/review/RiskWarning.astro';

const { broker } = Astro.props;
---

<BaseLayout title={`${broker.brokerName} Review`}>
  <BrokerHeader broker={broker} />
  <BrokerNavigation />
  
  <main>
    <BrokerOverview broker={broker} />
    <BrokerRegulation broker={broker} />
    <BrokerProsAndCons broker={broker} />
    <BrokerVerdict broker={broker} />
  </main>

  <RiskWarning />
</BaseLayout>
```

### Filtered Broker List Page
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import BrokerList from '../components/BrokerList.astro';

const filteredBrokers = brokers.filter(b => b.cmaApproved);
---

<BaseLayout title="CMA Approved Brokers">
  <BrokerList 
    brokers={filteredBrokers}
    title="CMA Approved Forex Brokers"
    description="Trade safely with regulated brokers"
  />
</BaseLayout>
```