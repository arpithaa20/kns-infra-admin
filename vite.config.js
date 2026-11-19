import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/dev": {
        target: "http://192.168.0.201",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});