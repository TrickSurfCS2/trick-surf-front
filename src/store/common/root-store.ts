import AppStore from '../app.store'
import UserStore from '../user.store'

import { useRootStore } from '#/contexts/use-root-store'

export interface IRootStore {
  appStore: AppStore
  userStore: UserStore
}

//* ---- Root store ------------------------------------------------------------- *//
export class RootStore implements IRootStore {
  appStore!: AppStore
  userStore!: UserStore

  constructor() {
    const appStore = new AppStore()
    const userStore = new UserStore()

    this.appStore = appStore
    this.userStore = userStore
  }
}

export const useAppStore = useRootStore
