import { instance } from '#/utils/api'

export function getFullImageUrl(value: string) {
  return `${instance?.defaults.baseURL}${value}`
}
