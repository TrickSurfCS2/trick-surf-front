import { observe } from 'mobx'
import { observer } from 'mobx-react-lite'
import type { FC, PropsWithChildren } from 'react'

import cn from 'classnames'

import { DialogWrapperStyled } from './dialog-wrapper.style'

import type { BaseDialogStore } from './dialog.store'

import { useScrollLock } from '#/hooks/use-scroll-lock'

export interface IDialogProps extends PropsWithChildren {
  store: BaseDialogStore
  isCustomStyle?: boolean
  className?: string
}

export const Dialog: FC<IDialogProps> = observer((props) => {
  const { children, store, className, isCustomStyle } = props
  const { isDialogHidden: isHidden, dialogParams, dialogState, hideDialog } = store
  const { isLock, isVisible } = dialogState
  const { isNotAnimate, isOutsideClick, delay } = dialogParams

  const { switchLock } = useScrollLock()

  observe(dialogState, 'isVisible', ({ newValue }) => switchLock(newValue as boolean))

  return isHidden
    ? null
    : isCustomStyle
      ? (
        <>{children}</>
        )
      : (
        <DialogWrapperStyled
          onMouseDown={() => isOutsideClick && hideDialog()}
          isNotAnimate={!!isNotAnimate}
          isVisible={isVisible}
          isLock={isLock}
          delay={delay ?? 0}
        >
          <div onMouseDown={e => e.stopPropagation()} className={cn('dialog', className)}>
            {children}
          </div>
        </DialogWrapperStyled>
        )
})
