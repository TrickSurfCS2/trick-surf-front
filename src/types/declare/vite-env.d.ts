/// <reference types="vite/client" />

interface ImportMetaEnv {
  // see https://vitejs.dev/guide/env-and-mode.html#env-files
  // add .env variables.
  readonly VITE_API_URL_PROD: string
  readonly VITE_API_URL_DEV: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
