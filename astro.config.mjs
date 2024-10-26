// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: cloudflare(),
  vite: {
    ssr: {
      // Example: Force a broken package to skip SSR processing, if needed
      external: ['@prisma/client'],
    },
  },
});
