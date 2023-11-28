import type { RefObject } from 'react'

import { useEventListener } from './use-event-listener'

type Handler = (event: MouseEvent) => void

export function useOutsideClick<T extends HTMLElement | null>(ref: RefObject<T>[], handler: Handler, mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'): void {
  useEventListener(mouseEvent, (event) => {
    let isContain = false

    ref.forEach((el) => {
      if (el?.current?.contains(event.target as Node))
        isContain = true
    })

    if (isContain)
      return

    handler(event)
  })
}
