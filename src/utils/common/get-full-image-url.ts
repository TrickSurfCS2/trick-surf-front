import { Apis } from '#/types/common'

export const getFullImageUrl = (value: string) => {
  const instance = getInstance(Apis.Static)

  return `${instance?.defaults.baseURL}${value}`
}
