export enum Apis {
  Auth = 'Auth',
  Trick = 'Trick'
}

export interface Endpoints {
  development: Record<Apis, string>
  production: Record<Apis, string>
}
