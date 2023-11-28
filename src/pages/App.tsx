import ErrorBoundary from '#/components/error/error-boundary'
import AppLayout from '#/components/layouts/app/app.layout'
import { Modal } from '#/components/ui/modal/modal'
import type { ModalController } from '#/components/ui/modal/modal.store'
import { RootStoreProvider } from '#/contexts/root-store'
import ThemeProvider from '#/contexts/theme'
import { useAppInitialize } from '#/hooks/user-app-initialize.hook'
import { AppRoutes } from '#/utils/router'

// App content page
//* ------------------------------------------------------------------------------------------ *//
const AppContent = observer(() => {
  const modalRef = useRef<ModalController>()

  const isInit = useAppInitialize({ modalRef })

  return (
    <>
      {!!isInit && (
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      )}
      <Modal controllerRef={modalRef} />
    </>
  )
})

// App
//* ------------------------------------------------------------------------------------------ *//
function App() {
  return (
    <RootStoreProvider>
      <ErrorBoundary componentName="-">
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </ErrorBoundary>
    </RootStoreProvider>
  )
}

export default App
