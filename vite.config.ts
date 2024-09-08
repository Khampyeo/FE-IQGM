import path from "path"; // Import path for resolving directories
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default () => {
  return defineConfig({
    root: "./src",
    base: "",
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          exportType: "default",
          ref: true,
          svgo: false,
          titleProp: true,
        },
        include: "**/*.svg",
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"), // Set up the alias to point to the 'src' folder
      },
    },
  });
};
