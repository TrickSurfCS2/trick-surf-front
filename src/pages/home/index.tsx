import type { FC } from 'react'

import { HomeStyled } from './style'

import SceneViewer from '#/components/scene/scene-viewer'
import { Logo } from '#/components/ui/logo/logo'

// Home page
//* ------------------------------------------------------------------------------------------ *//
const Home: FC = observer(() => {
  return (
    <HomeStyled>
      <Logo />
      <SceneViewer />
    </HomeStyled>
  )
})

export default Home
