declare const process: NodeJS.Process

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_HEADER?: string
      API_URL_PROD?: string
      API_URL_DEV?: string
    }
  }
}

export {}
