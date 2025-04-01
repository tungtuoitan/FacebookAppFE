import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()
],
  server: {
    port: parseInt(process.env.VITE_PORT as string) || 5173
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'), 
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
});
