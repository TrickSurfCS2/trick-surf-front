import type { AxiosInstance, HeadersDefaults } from 'axios'

import { instance } from '..'

import { urls } from '.'

//* - HELPERS --------------------------------------------------------------------------------- * //
export function setHeadersInstance(params: Partial<HeadersDefaults>) {
  instance.defaults.headers = {
    ...JSON.parse(JSON.stringify(instance.defaults.headers)),
    ...params,
  } as AxiosInstance['defaults']['headers']
}

function setupBaseUrl(isProd: boolean) {
  const endpoints = { ...urls }
  instance.defaults.baseURL = endpoints[isProd ? 'production' : 'development']
}

function applyInterceptor(interceptor: ((instance: AxiosInstance) => void) | ((instance: AxiosInstance) => void)[]) {
  const interceptors = Array.isArray(interceptor) ? interceptor : [interceptor]
  interceptors.forEach(inter => inter(instance))
}

export { setupBaseUrl, applyInterceptor }
