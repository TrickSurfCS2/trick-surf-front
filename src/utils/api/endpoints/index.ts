import type { AxiosInstance } from 'axios'
import axios from 'axios'

import { AuthApi } from './auth'
import { MapApi } from './map'
import { TrickApi } from './trick'
import { TriggerApi } from './trigger'

import { Apis } from '#/types/common'

export const instances = new Map<Apis, AxiosInstance>([
  [Apis.Auth, axios.create({ withCredentials: true })],
  [Apis.Trick, axios.create()],
  [Apis.Map, axios.create()],
  [Apis.Trigger, axios.create()],
  [Apis.Static, axios.create()]
])

export const api = {
  auth: AuthApi(instances.get(Apis.Auth) as AxiosInstance),
  map: MapApi(instances.get(Apis.Map) as AxiosInstance),
  trick: TrickApi(instances.get(Apis.Trick) as AxiosInstance),
  trigger: TriggerApi(instances.get(Apis.Trick) as AxiosInstance)
  // static: // TODO
}
