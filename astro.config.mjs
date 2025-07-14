import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://fx.kenyaforexfirm.com',
  integrations: [tailwind(), icon()],
  build: {
    inlineStylesheets: 'auto',
  },
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