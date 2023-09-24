export enum Apis {
  Auth = 'auth',
  Trick = 'trick',
  Trigger = 'trigger'
}

export interface Endpoints {
  development: Record<Apis, string>
  production: Record<Apis, string>
}
