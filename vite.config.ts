import path from "path"; // Import path for resolving directories
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default () => {
  return defineConfig({
    root: "./src",
    base: "",
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"), // Set up the alias to point to the 'src' folder
      },
    },
  });
};
