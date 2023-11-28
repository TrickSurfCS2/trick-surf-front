import { StoreContext } from './root-store'

export function useRootStore() {
  const context = useContext(StoreContext)
  if (context === undefined)
    throw new Error('useRootStore must be used within RootStoreProvider')

  return context
}
