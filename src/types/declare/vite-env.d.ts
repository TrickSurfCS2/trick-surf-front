/// <reference types="vite/client" />

// eslint-disable-next-line @typescript-eslint/naming-convention
interface ImportMetaEnv {
  // see https://vitejs.dev/guide/env-and-mode.html#env-files
  // add .env variables.
  readonly API_URL_PROD: string
  readonly API_URL_DEV: string
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/naming-convention
interface ImportMeta {
  readonly env: ImportMetaEnv
}
