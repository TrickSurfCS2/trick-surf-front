import type { Endpoints } from '#/types/common'

const VITE_API_URL_PROD = import.meta.env.VITE_API_URL_PROD ?? ''
const VITE_API_URL_DEV = import.meta.env.VITE_API_URL_DEV ?? ''

export const urls: Endpoints = {
  development: VITE_API_URL_DEV,
  production: VITE_API_URL_PROD,
}
