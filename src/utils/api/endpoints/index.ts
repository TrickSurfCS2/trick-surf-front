import type { AxiosInstance } from 'axios'
import axios from 'axios'

import { AuthApi } from './auth'
import { TrickApi } from './trick'
import { TriggerApi } from './trigger'

import { Apis } from '#/types/common'

export const instances = new Map<Apis, AxiosInstance>([
  [Apis.Auth, axios.create({ withCredentials: true })],
  [Apis.Trick, axios.create()],
  [Apis.Trigger, axios.create()]
])

export const api = {
  auth: AuthApi(instances.get(Apis.Auth) as AxiosInstance),
  trick: TrickApi(instances.get(Apis.Trick) as AxiosInstance),
  trigger: TriggerApi(instances.get(Apis.Trick) as AxiosInstance)
}
