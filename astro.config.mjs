import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import node from '@astrojs/node';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fx.kenyaforexfirm.com',
  integrations: [tailwind(), icon(), react(), sitemap()],
  trailingSlash: 'always',

  build: {
    inlineStylesheets: 'auto',
  },
  experimental: {
        fonts: [{
            provider: fontProviders.google(),
            name: "Roboto",
            cssVariable: "--font-roboto"
        }]
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
     }
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
          },
        },
      },
    },
  },

  
});