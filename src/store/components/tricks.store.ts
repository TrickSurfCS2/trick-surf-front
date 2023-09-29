import type { Trick, Trigger } from '#/types/models/trick'

interface TricksStoreState {
  isLoading: boolean
  isLoaded: boolean
  isFiltered: boolean

  tricks: Trick[]
  triggers: Trigger[]
  filteredTricks: Trick[]
}

export default class TricksStore {
  state: TricksStoreState = {
    isLoading: false,
    isLoaded: false,
    isFiltered: false,

    tricks: [],
    triggers: [],
    filteredTricks: []
  }

  constructor() {
    makeObservable(this, {
      setTricks: action,
      setTriggers: action,
      fetchTricks: action
    })

    makeAutoObservable(this.state)
  }

  setTricks = (value: Trick[]): Trick[] => (this.state.tricks = value)
  setTriggers = (value: Trigger[]): Trigger[] => (this.state.triggers = value)
  setFilteredTricks = (value: stirng): filteredTricks[] => {
    return (this.state.filteredTricks = this.state.tricks.sort((a, b) => a[value] - b[value]))
    //   return tricks.sort((a, b) => a. - b.value)
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
