import { instance } from '#/utils/api'

export const getFullImageUrl = (value: string) => {
  return `${instance?.defaults.baseURL}${value}`
}
