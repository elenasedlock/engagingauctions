// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://engagingauctions.com',
  // WordPress served every page with a trailing slash. Keeping that identical
  // means the cutover needs no redirects.
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap(), icon()],
  vite: { plugins: [tailwindcss()] },
});
