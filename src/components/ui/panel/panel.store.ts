import { BaseDialogStore } from '../dialog/dialog.store'

import type { Side } from './panel.style'
import type { IBaseDialogStoreParams } from '../dialog/dialog.store'

export interface IPanelStoreParams extends IBaseDialogStoreParams {
  side?: Side
  width?: string
}

export class PanelStore extends BaseDialogStore {
  private _params?: IPanelStoreParams

  constructor(params?: IPanelStoreParams) {
    super(params)

    this._params = {
      ...params
    }
  }

  handleOutsideClick = () => {
    if (this.isVisible && this.dialogParams.isOutsideClick) {
      this.hideDialog()
    }
  }

  get isDialogNotAnimate(): boolean {
    return !!this._params?.isNotAnimate
  }

  get side(): Side {
    return this._params?.side ?? 'left'
  }

  get width(): string {
    return this._params?.width ?? '300px'
  }
}
