import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import node from '@astrojs/node';

export default defineConfig({
  site: 'https://fx.kenyaforexfirm.com',
  integrations: [tailwind(), icon()],

  build: {
    inlineStylesheets: 'auto',
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

  adapter: node({
    mode: 'standalone',
  }),
});