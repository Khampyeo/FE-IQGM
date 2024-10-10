/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string; // Add your custom variables here
  // Add other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
