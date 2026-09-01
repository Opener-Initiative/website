import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { satteri } from "@astrojs/markdown-satteri";
import { hastExternalLinks } from "./src/lib/hast-external-links";

// https://astro.build/config
export default defineConfig({
  // Absolute URLs are required for the RSS feed and canonical links.
  site: "https://opener-initiative.org",
  // Paired per Astro's guidance: `directory` format goes with `trailingSlash: 'always'`.
  // The site is uploaded to Apache shared hosting, which serves directory indexes by
  // default; extension-less URLs would need MultiViews or rewrite rules.
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  markdown: {
    processor: satteri({
      hastPlugins: [hastExternalLinks],
    }),
  },
  integrations: [react(), sitemap()],
  server: {
    host: true,
    port: 8080,
  },
});
