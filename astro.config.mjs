// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

//import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://fx.kenyaforexfirm.com',

  integrations: [
    tailwind(),
    mdx(),
    sitemap()
  ],

  //server: {
    //host: '0.0.0.0'
  //},
  output: 'static',
  //adapter: cloudflare()
});