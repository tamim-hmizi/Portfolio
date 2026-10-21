import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Portfolio/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (/node_modules\/(react|react-dom|scheduler)\//.test(id)) return "react";
            if (/node_modules\/(framer-motion|motion-dom|motion-utils)\//.test(id)) return "framer-motion";
            if (id.includes("node_modules/react-icons/si/")) return "icons-si";
            if (id.includes("node_modules/react-icons/")) return "icons";
          }
        },
      },
    },
  },
});
