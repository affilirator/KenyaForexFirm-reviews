import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import node from '@astrojs/node';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://fx.kenyaforexfirm.com',
  integrations: [tailwind(), icon(), react()],
  trailingSlash: 'always',

  build: {
    inlineStylesheets: 'auto',
  },
   image: {
    ervice: {
      entrypoint:  'astro/assets/services/sharp' | string,
      config: {
        // ... service-specific config. Optional.
      }
    },
    domains: ['kenyaforexfirm.com', 'kenyaforexfirm.co.ke',
       'mahinge.com', 
       'www.mahinge.com',
       'www.kenyaforexfirm.com',
       'www.fx.kenyaforexfirm.com',
       'api.kenyaforexfirm.com',
       'fxmedia.kenyaforexfirm.com',
       'www.fx.kenyaforexfirm.com',
       'www.fx.kenyaforexfirm.com',
'ajira.pro', 
'amazonaws.com'
], // Replace with your actual external image domains
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