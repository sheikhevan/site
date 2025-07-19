// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import { execSync } from 'child_process';

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'everforest-dark',
    },
  },
  integrations: [react(), sitemap()],
  
  vite: {
    plugins: [tailwindcss()],
  },

  site: 'https://www.evanalvarez.dev'
});