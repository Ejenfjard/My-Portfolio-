/** @format */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "./", // rotmappen
  build: {
    outDir: "dist", // byggmappen
  },
});