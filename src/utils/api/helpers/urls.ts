import type { Endpoints } from '#/types/common'
import { Apis } from '#/types/common'

const API_URL_PROD = import.meta.env.API_URL_PROD ?? 'http://localhost:8080'
const API_URL_DEV = import.meta.env.API_URL_DEV ?? 'https://api.xsolare.pro'

export const urls: Endpoints = {
  development: {
    [Apis.Static]: API_URL_DEV,
    [Apis.Map]: API_URL_DEV,
    [Apis.Auth]: API_URL_DEV,
    [Apis.Trick]: API_URL_DEV,
    [Apis.Trigger]: API_URL_DEV
  },
  production: {
    [Apis.Static]: API_URL_PROD,
    [Apis.Map]: API_URL_PROD,
    [Apis.Auth]: API_URL_PROD,
    [Apis.Trick]: API_URL_PROD,
    [Apis.Trigger]: API_URL_PROD
  }
}
