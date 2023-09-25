import type { FC, PropsWithChildren } from 'react'
import { Fragment, useEffect } from 'react'

import { AppStyled } from './app.style'

import Header from '#/components/header/header'

// Default layout
//* ------------------------------------------------------------------------------------------ *//
const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  const { appStore } = useAppStore()

  useEffect(() => {
    appStore.updateViewport()
    appStore.updateScroll()
    window.onresize = () => appStore.updateViewport()
    window.onscroll = () => appStore.updateScroll()
  }, [])

  return (
    <Fragment>
      <AppStyled>{children}</AppStyled>
      <Header />
    </Fragment>
  )
}

export default AppLayout
