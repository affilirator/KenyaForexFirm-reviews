import { defineConfig, fontProviders } from 'astro/config';
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
        fonts: [
          {
            provider: fontProviders.google(),
            name: "Roboto",
            cssVariable: "--font-roboto",
            weights: [400, 500, 700, ] ,
            styles: ["normal", "italic", 'oblique', ],
            subsets: ["cyrillic-ext", "cyrillic", "greek-ext", "greek", "vietnamese", "latin-ext", "latin"],
        },
         {
            provider: fontProviders.google(),
            name: "Source Sans 3",
            cssVariable: "--font-source-sans-3",
            weights: [400, 500, 700, ] ,
            styles: ["normal", "italic", 'oblique', ],
            subsets: ["cyrillic-ext", "cyrillic", "greek-ext", "greek", "vietnamese", "latin-ext", "latin"],
        },
        {
        name: "EB Garamond",
        cssVariable: "--font-eb-garamond",
        provider: "local",
        // Weight and style are not specified so Astro
        // will try to infer them for each variant
        variants: [
          {
            src: [
              "./src/assets/fonts/eb-garamond-v31-latin-500.woff2",
              "./src/assets/fonts/eb-garamond-v31-latin-700.woff2",
              "./src/assets/fonts/eb-garamond-v31-latin-800.woff2",
              "src/assets/fonts/eb-garamond-v31-latin-regular.woff2"
            ]
          },
          
        ]
      },
       {
        name: "Playfair Display",
        cssVariable: "--font-playfair-display",
        provider: "local",
        // Weight and style are not specified so Astro
        // will try to infer them for each variant
        variants: [
          {
            
            src: [
              "./src/assets/fonts/playfair-display-v39-latin-500.woff2",
              
            ],
            src: [
              "./src/assets/fonts/playfair-display-v39-latin-700.woff2",
              
            ],
            src: [
              
              "./src/assets/fonts/playfair-display-v39-latin-regular.woff2",
              
            ]
          },
          
        ]
      }
      ]
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