import type { AxiosInstance } from 'axios'

import CommonApiV1 from './auth.v1'

export const AuthApi = (instance: AxiosInstance) => ({
  v1: CommonApiV1(instance)
})
