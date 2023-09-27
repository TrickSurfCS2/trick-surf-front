import type { FC, PropsWithChildren } from 'react'
import { Fragment, useEffect } from 'react'

import { AppStyled } from './app.style'

import Footer from '#/components/footer'
import Header from '#/components/header'
import { Panel } from '#/components/ui/panel/panel'
import { PanelStore } from '#/components/ui/panel/panel.store'

// App layout
//* ------------------------------------------------------------------------------------------ *//
const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  const { appStore } = useAppStore()
  const store = useNewStore(PanelStore)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    appStore.updateViewport()
    appStore.updateScroll()
    window.onresize = () => appStore.updateViewport()
    window.onscroll = () => appStore.updateScroll()
  }, [])

  return (
    <Fragment>
      <AppStyled>{children}</AppStyled>
      <Header ref={headerRef} onMenuClick={() => store.switchVisible(true)} />
      <Panel store={store} ignoredRefsOutsideClick={[headerRef]} />
      <Footer />
    </Fragment>
  )
}

export default AppLayout
