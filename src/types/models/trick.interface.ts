export interface Trick {
  index: number
  id: number
  name: string
  point: number
  velocity: number
  dateAdd: Date
  len: number | null
  authorSteamid: string | null
  completes: number | null
  myCompletes: number | null
  routeIds: string

  route: Trigger[]
  // completes: Completes[];
}

export interface Trigger {
  id: number
  name: string
  alternativeName: string
  src: string | null
  x: number | null
  y: number | null
  z: number | null
  mapId: number
}
