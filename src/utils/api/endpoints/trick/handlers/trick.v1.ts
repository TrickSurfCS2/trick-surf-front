import type { AxiosInstance, AxiosPromise } from 'axios'

import type { IGetTrickListParams } from '../types/trick.payload'

import type { Trick } from '#/types/models/trick'

export default (instance: AxiosInstance) => ({
  getTrickList<T = Trick[]>(params?: IGetTrickListParams): AxiosPromise<T> {
    return instance.get(`/api/v1/trick/list`, { params })
  },
})
