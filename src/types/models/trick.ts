export interface Trick {
  index: number
  id: number
  name: string
  point: number
  startType: number
  totalCompletes: number | null
  trickLength: number | null
  createdAt: Date
  authorSteamid64: string | null
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
