import type { AxiosInstance } from 'axios'

import CommonApiV1 from './trigger.v1'

export const TriggerApi = (instance: AxiosInstance) => ({
  v1: CommonApiV1(instance)
})
