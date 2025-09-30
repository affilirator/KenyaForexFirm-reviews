import { defineConfig, fontProviders } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import node from '@astrojs/node';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fx.kenyaforexfirm.com',
  integrations: [
    tailwind({
      // Apply base styles before Astro's styles
      applyBaseStyles: false,
    }),
    ,
    icon(),
    react(),
    sitemap(),
  ],
  trailingSlash: 'always',

  build: {
    inlineStylesheets: 'never',
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: 'Roboto Variable',
        cssVariable: '--font-roboto',
        // weights: [500 700],
        styles: ['normal'],
        subsets: ['latin'],
        fallbacks: ["sans-serif"]
      },
      {
        provider: fontProviders.fontsource(),
        name: 'Source Sans 3 Variable',
        cssVariable: '--font-source-sans-3',
        weights: [500, 700],
        styles: ['normal'],
        subsets: ['latin'],
        fallbacks: ["sans-serif"]
      },
      {
        name: 'Inter',
        cssVariable: '--font-inter',
        provider: fontProviders.fontsource(),
        // Specify weights that are actually used
        //weights: [500, 700],
        // Specify styles that are actually used
        styles: ['normal'],
        // Download only font files for characters used on the page
        subsets: ['latin'],
        fallbacks: ["sans-serif"]
      },
      {
        name: 'EB Garamond Variable',
        cssVariable: '--font-eb-garamond',
        provider: fontProviders.fontsource(),
        fallbacks: ["serif"],
        // Weight and style are not specified so Astro
        // will try to infer them for each variant
        variants: [{}],
      },
      {
        name: 'Playfair Display Variable',
        cssVariable: '--font-playfair-display',
        provider: fontProviders.fontsource(),
        fallbacks: ["serif"],
        // Weight and style are not specified so Astro
        // will try to infer them for each variant
        variants: [{}],
      },
    ],
  },

  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kenyaforexfirm.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.mahinge.com',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['kenyaforexfirm.com, mahinge.com'], // Add your actual external image domains
    service: {
      //entrypoint:  'astro/assets/services/sharp',
      config: {
        // ... service-specific config. Optional.
      },
    },
    // Replace with your actual external image domains
  },

  output: 'static',

  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro-seo'],
            uiComponents: [
              'react',
              'react-dom',
              // Add UI-related libraries if applicable
            ],
          },
        },
      },
    },
  },
});
