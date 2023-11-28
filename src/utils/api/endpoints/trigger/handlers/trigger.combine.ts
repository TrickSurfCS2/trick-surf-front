import type { AxiosInstance } from 'axios'

import CommonApiV1 from './trigger.v1'

export function TriggerApi(instance: AxiosInstance) {
  return {
    v1: CommonApiV1(instance),
  }
}
