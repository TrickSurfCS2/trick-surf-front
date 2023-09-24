import type { AxiosInstance, HeadersDefaults } from 'axios'

import { instances } from '..'

import { urls } from '.'

import type { Apis } from '#/types/common'

//* - HELPERS --------------------------------------------------------------------------------- * //
const setHeadersInstance = (instance: AxiosInstance, params: Partial<HeadersDefaults>) => {
  instance.defaults.headers = {
    ...JSON.parse(JSON.stringify(instance.defaults.headers)),
    ...params
  } as AxiosInstance['defaults']['headers']
}

const setupBaseUrls = (isProd: boolean, additionalUrls?: typeof urls) => {
  const endpoints = { ...urls, ...additionalUrls }
  instances.forEach((instance, key) => {
    instance.defaults.baseURL = endpoints[isProd ? 'production' : 'development'][key]
  })
}

const updateHeadersInstances = (
  callbackParams: (instanceKey: Apis) => Partial<HeadersDefaults>,
  instanceKey?: Apis | Apis[]
) => {
  if (Array.isArray(instanceKey)) {
    instanceKey.forEach((key) => {
      const inst = instances.get(key) as AxiosInstance
      setHeadersInstance(inst, callbackParams(key))
    })
  } else if (instanceKey) {
    const inst = instances.get(instanceKey) as AxiosInstance
    setHeadersInstance(inst, callbackParams(instanceKey))
  } else {
    instances.forEach((inst, instanceKey) => {
      setHeadersInstance(inst, callbackParams(instanceKey))
    })
  }
}

const getInstance = (key: Apis) => instances.get(key)

const applyInterceptor = (
  interceptor: ((instance: AxiosInstance) => void) | ((instance: AxiosInstance) => void)[],
  instancesApis: Apis[] = []
) => {
  const interceptors = Array.isArray(interceptor) ? interceptor : [interceptor]

  instances.forEach((inst, key) => {
    if (instancesApis.length === 0 || instancesApis.includes(key)) {
      interceptors.forEach((inter) => inter(inst))
    }
  })
}

export { updateHeadersInstances, getInstance, setupBaseUrls, applyInterceptor }
