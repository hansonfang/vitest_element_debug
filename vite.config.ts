import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3200,
  },
  plugins: [vue()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./setup.ts"],
    deps: {
      inline: ["element-plus"],
    },
    include: ["**/button.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
});
