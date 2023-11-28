import { useMemo, useRef } from 'react'

import type { TControllerRef } from './utils'

//* ---- MobX store helpers ------------------------------ * //

export function useNewStore<T, P>(Store: new (args: P) => T, args: P = {} as P, dependencies: [] = []): T {
  return useMemo(() => new Store(args), dependencies)
}

export function useGetController<T>(store: { controller: T }): TControllerRef<T> {
  const controller = useRef<T>()
  controller.current = store.controller
  return controller
}

export function setController<T>(store: { controller: T }, controllerRef?: TControllerRef<T>): T {
  const { controller } = store
  return controllerRef === undefined ? controller : (controllerRef.current = controller)
}
