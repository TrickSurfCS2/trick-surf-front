import type { AxiosInstance, AxiosPromise } from 'axios'

import type { IGetTriggerParams } from '..'

import type { Trigger } from '#/types/models/trick'

export default (instance: AxiosInstance) => ({
  getTriggers<T = Trigger[]>(params?: IGetTriggerParams): AxiosPromise<T> {
    return instance.get(`/api/v1/trigger`, { params })
  },
})
