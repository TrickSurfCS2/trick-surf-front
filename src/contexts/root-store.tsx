import type { ReactNode } from 'react'

import { configure } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import { createContext } from 'react'

import { IRootStore } from '#/store/common/root-store'
import { isServerSide } from '#/utils/common/env'

enableStaticRendering(isServerSide())

configure({ useProxies: 'always' })

const StoreContext = createContext<IRootStore | undefined>(undefined)
StoreContext.displayName = 'StoreContext'

export function useRootStore() {
  const context = useContext(StoreContext)
  if (context === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider')
  }

  return context
}

export function RootStoreProvider({ children }: { children: ReactNode }) {
  const store = new IRootStore()
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
