import type { AxiosInstance, AxiosPromise } from 'axios'

import type { Trick } from '#/types/models/trick'

export default (instance: AxiosInstance) => ({
  getTrickList<T = Trick[]>(): AxiosPromise<T> {
    return instance.get(`/api/v1/trick/list`)
  }
})
