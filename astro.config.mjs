
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://jaishreeequipmentdairy.co.in",

  trailingSlash: "never",

  integrations: [
    react(),
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
    build: {
      chunkSizeWarningLimit: 1000,
    },
  },

  image: {
    domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dddhtbuzs/**",
      },
    ],
  },
});
