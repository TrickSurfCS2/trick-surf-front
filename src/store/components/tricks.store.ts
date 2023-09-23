import type { Trick } from '#/types/models/trick.interface'

interface TricksStoreState {
  tricks: Trick[]
}

export default class TricksStore {
  state: TricksStoreState = {
    tricks: []
  }

  constructor() {
    makeAutoObservable(this.state)
  }

  setTricks = (value: Trick[]): Trick[] => (this.state.tricks = value)
}
