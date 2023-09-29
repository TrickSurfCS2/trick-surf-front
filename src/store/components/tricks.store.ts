import type { Trick, Trigger } from '#/types/models/trick'

export type SortSetting = Record<
  keyof Pick<Trick, 'index' | 'name' | 'point' | 'trickLength' | 'totalCompletes'>,
  'asc' | 'desc' | 'none'
>

interface TricksStoreState {
  isLoading: boolean
  isLoaded: boolean

  tricks: Trick[]
  triggers: Trigger[]
  filteredTricks: Trick[]
  sortedSettings: SortSetting
}

export default class TricksStore {
  state: TricksStoreState = {
    isLoading: false,
    isLoaded: false,

    tricks: [],
    triggers: [],
    filteredTricks: [],
    sortedSettings: {
      name: 'none',
      index: 'none',
      point: 'none',
      trickLength: 'none',
      totalCompletes: 'none'
    }
  }

  constructor() {
    makeObservable(this, {
      setTricks: action,
      setTriggers: action,
      fetchTricks: action,
      setFilteredTricks: action
    })

    makeAutoObservable(this.state)
  }

  setTricks = (value: Trick[]) => {
    this.state.tricks = value
    this.state.filteredTricks = value
  }
  setTriggers = (value: Trigger[]): Trigger[] => (this.state.triggers = value)

  setFilteredTricks = (key: keyof SortSetting) => {
    let currentDir = this.state.sortedSettings[key]

    if (currentDir === 'none') {
      this.state.sortedSettings[key] = 'asc'
    } else if (currentDir === 'asc') {
      this.state.sortedSettings[key] = 'desc'
    } else {
      this.state.sortedSettings[key] = 'none'
    }

    currentDir = this.state.sortedSettings[key]

    const tricks = deepCopy(this.state.tricks)

    Object.entries(this.state.sortedSettings).forEach(([key, dir]) => {
      if (dir !== 'none') {
        tricks.sort((a, b) => {
          const aValue = a[key as keyof Trick]
          const bValue = b[key as keyof Trick]

          if (aValue < bValue) {
            return dir === 'asc' ? -1 : 1
          }
          if (aValue > bValue) {
            return dir === 'asc' ? 1 : -1
          }
          return 0
        })
      }
    })

    this.state.filteredTricks = tricks
  }

  fetchTricks = async (mapId?: number) => {
    this.state.isLoading = true
    this.state.isLoaded = false

    try {
      const [tricks, trigger] = await Promise.all([
        api.trick.v1.getTrickList({ mapId }),
        api.trigger.v1.getTriggers({ mapId })
      ])

      this.setTricks(tricks.data)
      this.setTriggers(trigger.data)

      this.state.isLoading = false
    } catch (e) {
      // this
    } finally {
      this.state.isLoaded = true
    }
  }
}
