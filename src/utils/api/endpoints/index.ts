import axios from 'axios'

import { AuthApi } from './auth'
import { MapApi } from './map'
import { TrickApi } from './trick'
import { TriggerApi } from './trigger'

export const instance = axios.create()

export const api = {
  auth: AuthApi(instance),
  map: MapApi(instance),
  trick: TrickApi(instance),
  trigger: TriggerApi(instance)
}
