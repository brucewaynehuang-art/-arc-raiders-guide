import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Update this if you move to a custom domain later.
  site: 'https://rustwatch.netlify.app',
  compressHTML: true,
  integrations: [sitemap()],
});
