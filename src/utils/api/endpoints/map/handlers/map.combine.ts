import type { AxiosInstance } from 'axios'

import CommonApiV1 from './map.v1'

export const MapApi = (instance: AxiosInstance) => ({
  v1: CommonApiV1(instance)
})
