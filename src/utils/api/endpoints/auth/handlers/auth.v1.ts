import type { AxiosInstance, AxiosPromise } from 'axios'

import type { User } from '#/types/models/user'

export default (instance: AxiosInstance) => ({
  // : Обновить access_token по refresh_token
  refresh<T = User>(refreshToken: string): AxiosPromise<T> {
    return instance.post('/api/v2/auth/token/refresh', { refreshToken })
  }
})
