import type { FC } from 'react'

import { HomeStyled } from './home.style'

import SceneViewer from '#/components/shared/scene/scene-viewer'
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
