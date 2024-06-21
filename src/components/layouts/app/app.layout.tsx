import type { FC, PropsWithChildren } from 'react'
import { Fragment, useEffect } from 'react'

import { AppStyled } from './app.style'

import NavContent from './nav-content'
import Footer from '#/components/shared/footer'
import Header from '#/components/shared/header'
import { Panel } from '#/components/ui/panel/panel'
import { PanelStore } from '#/components/ui/panel/panel.store'

// App layout
//* ------------------------------------------------------------------------------------------ *//
const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  const { appStore } = useAppStore()
  const panelStore = useNewStore(PanelStore)
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
      <Header ref={headerRef} onMenuClick={() => panelStore.switchVisible(true)} />
      <Panel store={panelStore} ignoredRefsOutsideClick={[headerRef]}>
        <NavContent panelStore={panelStore} />
      </Panel>
      <Footer />
    </Fragment>
  )
}

export default AppLayout
