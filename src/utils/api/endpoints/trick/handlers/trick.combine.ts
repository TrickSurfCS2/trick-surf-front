import type { AxiosInstance } from 'axios'

import CommonApiV1 from './trick.v1'

export const TrickApi = (instance: AxiosInstance) => ({
  v1: CommonApiV1(instance)
})
