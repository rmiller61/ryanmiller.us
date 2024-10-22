// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [sitemap(), tailwind(), image({
    serviceEntryPoint: "@astrojs/image/sharp",
  }), react(), icon()],
  vite:
    import.meta.env.DEV === true
      ? {}
      : { ssr: { noExternal: ["react-use", "react-icons"] } },
});