import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default () => {
  return defineConfig({
    root: "./src",
    base: "",
    plugins: [react()],
  });
};
