import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    imageService: "passthrough", // disables Cloudflare Images binding
    sessionKVNamespaceName: undefined, // disables KV session binding
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
