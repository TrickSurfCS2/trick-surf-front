import type { Endpoints } from '#/types/common'
import { Apis } from '#/types/common'

export const urls: Endpoints = {
  development: {
    [Apis.Auth]: 'http://localhost:8080',
    [Apis.Trick]: 'http://localhost:8080',
    [Apis.Trigger]: 'http://localhost:8080'
  },
  production: {
    [Apis.Auth]: 'https://api.xsolare.pro',
    [Apis.Trick]: 'https://api.xsolare.pro',
    [Apis.Trigger]: 'https://api.xsolare.pro'
  }
}
