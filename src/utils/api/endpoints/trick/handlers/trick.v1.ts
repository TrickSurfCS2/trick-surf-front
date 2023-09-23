import type { AxiosInstance, AxiosPromise } from 'axios'

import type { Trick } from '#/types/models/trick'

export default (instance: AxiosInstance) => ({
  getList<T = Trick[]>(): AxiosPromise<T> {
    return instance.get(`/api/v1/trick/`)
  }
})
