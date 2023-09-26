import type { Endpoints } from '#/types/common'
import { Apis } from '#/types/common'

const VITE_API_URL_PROD = import.meta.env.VITE_API_URL_PROD ?? 'http://localhost:8080'
const VITE_API_URL_DEV = import.meta.env.VITE_API_URL_DEV ?? 'https://api.xsolare.pro'

export const urls: Endpoints = {
  development: {
    [Apis.Static]: VITE_API_URL_DEV,
    [Apis.Map]: VITE_API_URL_DEV,
    [Apis.Auth]: VITE_API_URL_DEV,
    [Apis.Trick]: VITE_API_URL_DEV,
    [Apis.Trigger]: VITE_API_URL_DEV
  },
  production: {
    [Apis.Static]: VITE_API_URL_PROD,
    [Apis.Map]: VITE_API_URL_PROD,
    [Apis.Auth]: VITE_API_URL_PROD,
    [Apis.Trick]: VITE_API_URL_PROD,
    [Apis.Trigger]: VITE_API_URL_PROD
  }
}
