export enum Apis {
  Static = 'static',
  Auth = 'auth',
  Map = 'map',
  Trick = 'trick',
  Trigger = 'trigger'
}

export interface Endpoints {
  development: Record<Apis, string>
  production: Record<Apis, string>
}
