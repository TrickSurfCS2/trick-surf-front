/* eslint-disable regexp/no-unused-capturing-group */
import type { ModalController } from '#/components/ui/modal/modal.store'
import type { TControllerRef } from '#/utils/common/utils'

import { setHeadersInstance } from '#/utils'

interface Props {
  modalRef: TControllerRef<ModalController>
}

// Initial setup
//* ------------------------------------------------------------------------------------------ *//
export function useAppInitialize(props: Props): boolean {
  const { modalRef } = props

  const [isInitialized, setIsInitialized] = useState<boolean>(false)

  const { appStore, userStore } = useAppStore()

  const initialize = async () => {
    appStore.setIsAppLoading(true)

    setHeadersInstance({
      common: { Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}` },
    })
    setupBaseUrl(!/(dev|localhost)/.test(window.location.host))

    appStore.setModalControllerRef(modalRef)
    await userStore.me()
    await appStore.fetchAndSetMaps()
    appStore.setTheme(LocalStorage.getItem(THEME))

    appStore.setIsAppLoading(false)
  }

  useIsomorphicLayoutEffect(() => {
    if (!isInitialized) {
      setIsInitialized(true)
      initialize()
    }
  }, [])

  return !appStore.isAppLoading && !!isInitialized
}
