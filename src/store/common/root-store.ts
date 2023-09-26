import AppStore from '../app.store'
import TricksStore from '../components/tricks.store'
import UserStore from '../user.store'

import { useRootStore } from '#/contexts/use-root-store'

export interface IRootStore {
  appStore: AppStore
  userStore: UserStore
  tricksStore: TricksStore
}

//* ---- Root store ------------------------------------------------------------- *//
export class RootStore implements IRootStore {
  appStore!: AppStore
  userStore!: UserStore
  tricksStore!: TricksStore

  constructor() {
    const appStore = new AppStore()
    const userStore = new UserStore()
    const tricksStore = new TricksStore()

    this.appStore = appStore
    this.userStore = userStore
    this.tricksStore = tricksStore
  }
}

export const useAppStore = useRootStore
