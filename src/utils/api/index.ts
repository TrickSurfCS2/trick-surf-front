import { AuthApi } from './auth'

export type ApiReturnType = {
  auth: ReturnType<typeof AuthApi>
}

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

export const api = (): ApiReturnType => {
  const apis = {
    auth: AuthApi(instance)
  }

  return apis
}
