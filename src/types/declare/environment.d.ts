declare const process: NodeJS.Process

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_HEADER?: string
      VITE_API_URL_PROD?: string
      VITE_API_URL_DEV?: string
    }
  }
}

export {}
