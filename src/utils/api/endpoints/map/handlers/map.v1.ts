import type { AxiosInstance, AxiosPromise } from 'axios'

import type { Map } from '#/types/models/map'

export default (instance: AxiosInstance) => ({
  getMaps<T = Map[]>(): AxiosPromise<T> {
    return instance.get(`/api/v1/map`)
  },
})
