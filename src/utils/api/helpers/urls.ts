import type { Endpoints } from '#/types/common'

const VITE_API_URL_PROD = import.meta.env.VITE_API_URL_PROD ?? 'http://localhost:8080'
const VITE_API_URL_DEV = import.meta.env.VITE_API_URL_DEV ?? 'https://api.xsolare.pro'

export const urls: Endpoints = {
  development: VITE_API_URL_DEV,
  production: VITE_API_URL_PROD
}
