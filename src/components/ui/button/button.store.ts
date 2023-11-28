import { makeAutoObservable } from 'mobx'

import type { ButtonProps } from './button'

export interface ButtonController {
  getState: () => ButtonState
}

export interface ButtonState {
  isDisabled: boolean
  isPending: boolean
  isVisible: boolean
}

export class ButtonStore {
  state: ButtonState = {
    isDisabled: false,
    isPending: false,
    isVisible: true,
  }

  props = {} as ButtonProps

  constructor(props: ButtonProps) {
    const { ...rest } = props

    this.props = {
      ...rest,
    }

    makeAutoObservable(this.state)
  }

  get stateGetter(): ButtonState {
    return {
      ...this.state,
    }
  }

  controller: ButtonController = {
    getState: () => this.stateGetter,
  }
}
