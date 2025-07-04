// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import { execSync } from 'child_process';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'everforest-dark',
    },
  },
  integrations: [
    react(),
    {
      name: "copy-crypto-posts",
      hooks: {
        "astro:build:start": async () => {
          console.log("running 'copy-crypto-posts' script...")
          try {
            execSync('node scripts/copy-crypto-posts.js', { 
              stdio: 'inherit',
              cwd: process.cwd()
            });
            console.log('✅ copy-crypto-posts completed successfully');
          } catch (error) {
            console.error('❌ Error running copy-crypto-posts:', error.message);
            throw error;
          }
        }
      }
    }
  ],
  
  vite: {
    plugins: [tailwindcss()],
  },

  site: 'https://www.evanalvarez.dev'
});
