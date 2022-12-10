import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  base: "/smkn2tabanan/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    },
  },
  build: {
    target: "es2015",
  }
});
