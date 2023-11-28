import type { AxiosInstance } from 'axios'

import CommonApiV1 from './trick.v1'

export function TrickApi(instance: AxiosInstance) {
  return {
    v1: CommonApiV1(instance),
  }
}
