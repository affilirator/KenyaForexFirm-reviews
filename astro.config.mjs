import { defineConfig, fontProviders } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import node from '@astrojs/node';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// Import polyfill for Cloudflare Workers
import './src/polyfills/message-channel.ts';

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
    sitemap({
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
  }),
  ],

  trailingSlash: 'always',

  build: {
    inlineStylesheets: 'never',
  },

  experimental: {
    fonts: [
      {
        provider: 'local',
        name: 'Roboto',
        cssVariable: '--font-roboto',
        //weights: [400, 500, 700],
        //styles: ['normal', 'italic', 'oblique'],
        //subsets: ['latin-ext', 'latin'],
        variants: [
          {
            src: ['./src/assets/fonts/roboto-v48-latin-700.woff2'],
            src: ['./src/assets/fonts/roboto-v48-latin-regular.woff2'],
          },
        ],
      },
      {
        provider: 'local',
        name: 'Source Sans 3',
        cssVariable: '--font-source-sans-3',
        //weights: [400, 500, 700],
        //styles: ['normal', 'italic', 'oblique'],
        // subsets: ['latin-ext', 'latin'],
        variants: [
          {
            src: ['./src/assets/fonts/source-sans-3-v18-latin-700.woff2'],
            src: ['./src/assets/fonts/source-sans-3-v18-latin-regular.woff2'],
          },
        ],
      },
      {
        name: 'EB Garamond',
        cssVariable: '--font-eb-garamond',
        provider: 'local',
        // Weight and style are not specified so Astro
        // will try to infer them for each variant
        variants: [
          {
            src: ['./src/assets/fonts/eb-garamond-v31-latin-700.woff2'],
            src: ['src/assets/fonts/eb-garamond-v31-latin-regular.woff2'],
          },
        ],
      },

      {
        name: 'Playfair Display',
        cssVariable: '--font-playfair-display',
        provider: 'local',
        // Weight and style are not specified so Astro
        // will try to infer them for each variant
        variants: [
          {
            src: ['./src/assets/fonts/playfair-display-v39-latin-700.woff2'],
            src: ['./src/assets/fonts/playfair-display-v40-latin-600.woff2'],
            src: [
              './src/assets/fonts/playfair-display-v39-latin-regular.woff2',
            ],
          },
        ],
      },
    ],
  },

  image: {
    service: {
      entrypoint: '@astrojs/image/sharp',
      config: {
        // ... service-specific config. Optional.
      },
    },
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
    resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: import.meta.env.PROD && {
        'react-dom/server': 'react-dom/server.edge',
      },
    },
    define: {
      global: 'globalThis',
    },
    
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro-seo'],
            uiComponents: ['react', 'react-dom'],
          },
        },
      },
    },
  },

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
      persist: true,
    },
    mode: 'advanced',
    runtime: {
      mode: 'local',
      type: 'pages',
    },
  }),
});
