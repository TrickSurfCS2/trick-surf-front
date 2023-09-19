import { AuthApi } from './auth'
import { PortainerApi } from './portainer'

export type ApiReturnType = {
  auth: ReturnType<typeof AuthApi>
  portainer: ReturnType<typeof PortainerApi>
}

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

export const api = (): ApiReturnType => {
  const apis = {
    auth: AuthApi(instance),
    portainer: PortainerApi(instance)
  }

  return apis
}
