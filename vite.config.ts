import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// @ts-ignore
import inject from "@rollup/plugin-inject";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  base: "/smkn2tabanan/",
  plugins: [vue(), inject({'window.Quill': ['@vueup/vue-quill', 'Quill']})],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    },
  },
  build: {
    target: "es2015",
  }
});
