// @ts-check

// https://astro.build/config
import image from "@astrojs/image";
// https://astro.build/config
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    sitemap(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite:
    import.meta.env.DEV === true
      ? {}
      : { ssr: { noExternal: ["react-use", "react-icons"] } },
});
