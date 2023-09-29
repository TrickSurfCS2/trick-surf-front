import { makeObservable, observable } from 'mobx'
import type { ElementType, ReactNode } from 'react'

import { BiLoader } from 'react-icons/bi'

import { BaseDialogStore } from '../dialog/dialog.store'

import type { ButtonProps } from '../button/button'
import type { ButtonController } from '../button/button.store'

export enum ModalType {
  'CONFIRM',
  'ALERT',
  'PROCESSING'
}

export interface ModalController {
  hide: () => void
  showLoader: (message?: string) => void
  showWarning: (params: ShowAlertTypedParams) => void
  showError: (params: ShowAlertTypedParams) => void
  showSuccess: (params: ShowAlertTypedParams) => void
  showInfo: (params: ShowAlertTypedParams) => void
  showCustomDialog: (params: ShowCustomDialogParams) => void
  showConfirm: (params: ShowConfirmParams) => void
}

export type DialogButtonParams = Omit<ButtonProps, 'onClick'> & {
  onClick: (
    modalController: ModalController,
    buttonController: ButtonController,
    e: React.MouseEvent
  ) => void
}

export enum AlertType {
  Warning = 'warning',
  Error = 'error',
  Success = 'success',
  Info = 'info',
  Processing = 'processing'
}

interface ShowDialogParams {
  Icon?: ElementType
  message: ReactNode
  headerText?: string
  maxWidth?: number
  alertType?: AlertType
}

export interface ShowAlertParams extends ShowDialogParams {
  okText?: string
  okClick?: (
    modalController: ModalController,
    buttonController: ButtonController,
    e: React.MouseEvent
  ) => void
}

export type ShowAlertTypedParams = Omit<ShowAlertParams, 'alertType'>

export interface ShowConfirmParams extends ShowAlertParams {
  cancelText?: string
  cancelClick?: (
    modalController: ModalController,
    buttonController: ButtonController,
    e: React.MouseEvent
  ) => void
}

export interface ShowCustomDialogParams extends ShowDialogParams {
  buttons: DialogButtonParams[]
}

type ShowModalParams = Omit<ShowDialogParams, 'alertType'> & {
  type: ModalType
  buttons: ButtonProps[]
  alertType: AlertType
}

export class ModalStore extends BaseDialogStore {
  showParams = {} as ShowModalParams

  showKey = Math.random()

  headerNames = {
    warning: 'Внимание!',
    error: 'Ошибка!',
    success: 'Успех',
    info: 'Информация',
    processing: 'Cообщение системы'
  }

  controller: ModalController

  constructor() {
    super({ isOutsideClick: false })
    this.showParams.buttons = []

    makeObservable(this, {
      showKey: observable
    })

    this.controller = this.getController()
  }

  showModal = (params: ShowModalParams): void => {
    this.showParams = params
    this.showKey = Math.random()
    this.showDialog()
  }

  showCustomDialog = (params: ShowCustomDialogParams): void => {
    const _buttons = [] as ButtonProps[]

    const { buttons, alertType, ...rest } = params

    _buttons.push(
      ...buttons.map((f) => {
        const { onClick, ...args } = f
        return {
          ...args,
          onClick: (buttonController: ButtonController, e: React.MouseEvent) => {
            onClick(this.controller, buttonController, e)
          }
        }
      })
    )

    this.showModal({
      ...rest,
      alertType: alertType || AlertType.Info,
      type: ModalType.ALERT,
      buttons: _buttons
    })
  }

  getHeaderByType = (alertType: AlertType): string =>
    this.showParams.headerText || this.headerNames[alertType]

  showAlert = (params: ShowAlertParams): void => {
    const { okClick, okText, alertType, ...rest } = params
    this.showModal({
      ...rest,
      type: ModalType.ALERT,
      alertType: alertType || AlertType.Warning,
      buttons: [
        {
          text: okText || 'Ok',
          onClick: (buttonStore, e) => {
            if (okClick) {
              okClick(this.controller, buttonStore, e)
            } else {
              this.hideDialog()
            }
          }
        }
      ]
    })
  }

  showWarning = (params: Omit<ShowAlertParams, 'alertType'>): void =>
    this.showAlert({ ...params, alertType: AlertType.Warning })

  showError = (params: Omit<ShowAlertParams, 'alertType'>): void =>
    this.showAlert({ ...params, alertType: AlertType.Error })

  showSuccess = (params: Omit<ShowAlertParams, 'alertType'>): void =>
    this.showAlert({ ...params, alertType: AlertType.Success })

  showInfo = (params: Omit<ShowAlertParams, 'alertType'>): void =>
    this.showAlert({ ...params, alertType: AlertType.Info })

  showConfirm = (params: ShowConfirmParams): void => {
    const { okClick, okText, cancelClick, cancelText, alertType, ...rest } = params
    this.showModal({
      ...rest,
      type: ModalType.CONFIRM,
      alertType: alertType || AlertType.Warning,
      buttons: [
        {
          text: cancelText || 'Отмена',
          onClick: (buttonStore, e) => {
            if (cancelClick) {
              cancelClick(this.controller, buttonStore, e)
            } else {
              this.hideDialog()
            }
          }
        },
        {
          text: okText || 'Ok',
          onClick: (buttonStore, e) => {
            if (okClick) {
              okClick(this.controller, buttonStore, e)
            } else {
              this.hideDialog()
            }
          }
        }
      ]
    })
  }

  showLoader = (message = 'Обработка данных...'): void => {
    this.showModal({
      Icon: BiLoader,
      message,
      alertType: AlertType.Processing,
      type: ModalType.PROCESSING,
      buttons: []
    })
  }

  getController = (): ModalController => {
    return {
      hide: () => this.hideDialog(),
      showLoader: (message) => this.showLoader(message),
      showConfirm: (params) => this.showConfirm(params),
      showCustomDialog: (params) => this.showCustomDialog(params),
      showError: (params) => this.showError(params),
      showInfo: (params) => this.showInfo(params),
      showSuccess: (params) => this.showSuccess(params),
      showWarning: (params) => this.showWarning(params)
    }
  }
}
