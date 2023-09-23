import { configure } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import type { ReactNode } from 'react'
import { createContext } from 'react'

import { isServerSide } from '#/utils/common/env'

enableStaticRendering(isServerSide())

configure({ useProxies: 'always' })

export const StoreContext = createContext<RootStore | undefined>(undefined)
StoreContext.displayName = 'StoreContext'

export function RootStoreProvider({ children }: { children: ReactNode }) {
  const store = new RootStore()
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
