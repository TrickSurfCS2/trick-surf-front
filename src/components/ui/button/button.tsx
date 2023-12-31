import { observer } from 'mobx-react-lite'
import type { ForwardedRef } from 'react'
import { forwardRef } from 'react'

import cn from 'classnames'

import { ButtonStore } from './button.store'
import { ButtonStyled } from './button.style'

import type { ButtonController } from './button.store'

import { setController, useNewStore } from '#/utils/common/stores'
import type { TControllerRef } from '#/utils/common/utils'

export interface ButtonProps {
  onClick: (controller: ButtonController, e: React.MouseEvent) => void
  text?: string
  controllerRef?: TControllerRef<ButtonController>
  className?: string
}

export const Button = observer(
  forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { controllerRef, ...rest } = props

    const store = useNewStore(ButtonStore, rest)
    const controller = setController(store, controllerRef)

    const { onClick, text, className } = store.props

    return (
      <ButtonStyled
        ref={ref}
        onClick={e => onClick(controller, e)}
        className={cn('button', className)}
      >
        <span className="button-text">{text}</span>
      </ButtonStyled>
    )
  }),
)
