export interface Trick {
  index: number
  id: number
  name: string
  point: number
  startType: number
  totalCompletes: number
  trickLength: number
  createdAt: Date
  authorSteamid64: string
  routeIds: string
  route: string
}

export interface Trigger {
  id: number
  name: string
  fullName: string
  preview: string | null
  coords: number[]
  mapId: number
  updatedAt: Date
}
