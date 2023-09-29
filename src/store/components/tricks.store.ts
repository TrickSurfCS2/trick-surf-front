import type { Trick, Trigger } from '#/types/models/trick'

export enum SortDir {
  Asc = 'asc',
  Desc = 'desc',
  None = 'none'
}

type TrickSortKey = keyof Pick<Trick, 'index' | 'name' | 'point' | 'trickLength' | 'totalCompletes'>

export type SortSetting<T extends string> = Record<T, SortDir>

export type TrickSortSetting = SortSetting<TrickSortKey>

interface TricksStoreState {
  isLoading: boolean
  isLoaded: boolean

  tricks: Trick[]
  triggers: Trigger[]
  filteredTricks: Trick[]
  sortedSettings: TrickSortSetting
}

export default class TricksStore {
  state: TricksStoreState = {
    isLoading: false,
    isLoaded: false,

    tricks: [],
    triggers: [],
    filteredTricks: [],
    sortedSettings: {
      name: SortDir.None,
      index: SortDir.None,
      point: SortDir.None,
      trickLength: SortDir.None,
      totalCompletes: SortDir.None
    }
  }

  constructor() {
    makeObservable(this, {
      setTricks: action,
      setTriggers: action,
      fetchTricks: action,
      filteringAndSetTricks: action
    })

    makeAutoObservable(this.state)
  }

  setTricks = (value: Trick[]) => {
    this.state.tricks = value
    this.state.filteredTricks = value
  }

  setTriggers = (value: Trigger[]): Trigger[] => (this.state.triggers = value)

  filteringAndSetTricks = (key: keyof TrickSortSetting) => {
    const currentDir = this.state.sortedSettings[key]

    const newDir =
      this.state.sortedSettings[key] === SortDir.None
        ? SortDir.Asc
        : currentDir === SortDir.Asc
        ? SortDir.Desc
        : SortDir.None

    this.state.sortedSettings[key] = newDir

    const tricks = deepCopy(this.state.tricks)

    Object.entries(this.state.sortedSettings).forEach(([key, dir]) => {
      if (dir !== SortDir.None) {
        tricks.sort((a, b) => {
          const aValue = a[key as keyof Trick]
          const bValue = b[key as keyof Trick]

          if (aValue < bValue) {
            return dir === SortDir.Asc ? -1 : 1
          }
          if (aValue > bValue) {
            return dir === SortDir.Asc ? 1 : -1
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
