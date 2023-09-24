import type { Trick, Trigger } from '#/types/models/trick'

interface TricksStoreState {
  isLoading: boolean
  isLoaded: boolean

  tricks: Trick[]
  triggers: Trigger[]
}

export default class TricksStore {
  state: TricksStoreState = {
    isLoading: false,
    isLoaded: false,

    tricks: [],
    triggers: []
  }

  constructor() {
    makeAutoObservable(this.state)
  }

  setTricks = (value: Trick[]): Trick[] => (this.state.tricks = value)
  setTriggers = (value: Trigger[]): Trigger[] => (this.state.triggers = value)

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
