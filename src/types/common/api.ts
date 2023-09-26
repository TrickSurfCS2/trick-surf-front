export enum Apis {
  Static = 'static',
  Auth = 'auth',
  Map = 'map',
  Trick = 'trick',
  Trigger = 'trigger'
}

export interface Endpoints {
  development: string
  production: string
}
