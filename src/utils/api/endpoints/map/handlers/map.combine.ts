import type { AxiosInstance } from 'axios'

import CommonApiV1 from './map.v1'

export function MapApi(instance: AxiosInstance) {
  return {
    v1: CommonApiV1(instance),
  }
}
