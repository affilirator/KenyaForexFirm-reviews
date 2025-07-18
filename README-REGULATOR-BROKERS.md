# Regulator Brokers Feature

This feature displays the top 5 brokers regulated by each financial regulator on the regulator detail pages.

## Implementation Details

### Components

- `TopRegulatedBrokers.astro`: Displays a grid of broker cards for a specific regulator
- `RegulatorPageTemplate.astro`: Updated to include the TopRegulatedBrokers component

### Services

- `broker-regulator-service.ts`: Contains functions to fetch brokers by regulator website or name

### Utilities

- `regulatorUtils.js`: Helper functions for working with regulator data

### Scripts

- `regulatorBrokerCards.js`: Client-side script for enhancing broker cards with animations

## How It Works

1. The `TopRegulatedBrokers` component is added to the regulator page template after the "About Regulator" section
2. It attempts to fetch brokers by matching the regulator's website with broker data
3. If no brokers are found by website, it falls back to matching by regulator name
4. The component displays up to 5 brokers in a responsive grid with their logos, names, ratings, and key features
5. If no brokers are found, a "Coming Soon" message is displayed

## Data Matching Logic

The system uses multiple approaches to match brokers with regulators:

1. **Website Matching**: Extracts the domain from the regulator's website and looks for brokers with matching regulator information
2. **Name Matching**: Normalizes regulator names and checks for similarity between the regulator name and broker regulator data
3. **Fallback**: If no matches are found, displays a placeholder message

## Styling and Animations

- Broker cards have hover effects and animations
- Broker logos are lazy-loaded for performance
- Rating badges have a pulse animation on hover
- Cards scale slightly on hover for an interactive feel

## Future Improvements

- Add caching to reduce API calls
- Implement server-side filtering for better performance
- Add more sophisticated matching algorithms
- Include broker comparison functionality