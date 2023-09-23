import type { Trick } from '#/types/models/trick'

interface TricksStoreState {
  isLoading: boolean
  isLoaded: boolean

  tricks: Trick[]
}

export default class TricksStore {
  state: TricksStoreState = {
    isLoading: false,
    isLoaded: false,

    tricks: []
  }

  constructor() {
    makeAutoObservable(this.state)
  }

  setTricks = (value: Trick[]): Trick[] => (this.state.tricks = value)

  fetchTricks = async () => {
    this.state.isLoading = true
    this.state.isLoaded = false

    try {
      const { data } = await api.trick.v1.getList()
      this.setTricks(data)
      this.state.isLoading = true
    } catch (e) {
      // thi
    } finally {
      this.state.isLoaded = false
    }
  }
}
