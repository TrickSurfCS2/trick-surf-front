import type { AxiosInstance } from 'axios'

import CommonApiV1 from './auth.v1'

export function AuthApi(instance: AxiosInstance) {
  return {
    v1: CommonApiV1(instance),
  }
}
