import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: "src/components/TvThemeButton.vue",
      name: "TvThemeButton",
      fileName: format => `todovue-theme-button.${format}.js`,
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      external: ["vue", "vue-highlight-code"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    }
  }
});
