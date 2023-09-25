import type { IModalController } from '#/components/ui/modal/modal.store'
import type { TControllerRef } from '#/utils/common/utils'

import { updateHeadersInstances } from '#/utils'

interface Props {
  modalRef: TControllerRef<IModalController>
}

// Initial setup
//* ------------------------------------------------------------------------------------------ *//
export const useAppInitialize = (props: Props): boolean => {
  const { modalRef } = props

  const [isInitialized, setIsInitialized] = useState<boolean>(false)

  const { appStore, userStore } = useAppStore()

  useIsomorphicLayoutEffect(() => {
    if (!isInitialized) {
      setIsInitialized(true)
      initialize()
    }
  }, [])

  const initialize = async () => {
    appStore.setIsAppLoading(true)

    updateHeadersInstances(() => ({
      common: { Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}` }
    }))
    setupBaseUrls(!/(dev|localhost)/.test(window.location.host))

    appStore.setModalControllerRef(modalRef)
    await userStore.me()
    await appStore.fetchAndSetMaps()
    appStore.setTheme(LocalStorage.getItem(THEME))

    appStore.setIsAppLoading(false)
  }

  return !appStore.isAppLoading && !!isInitialized
}
