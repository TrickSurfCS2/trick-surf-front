import type { FC } from 'react'

import { HomeStyled } from './style'

import ModelViewer from '#/components/scene/model-viewer'
// import { Logo } from '#/components/ui/logo/logo'

// Home page
//* ------------------------------------------------------------------------------------------ *//
const Home: FC = observer(() => {
  return (
    <HomeStyled>
      {/* <Logo /> */}
      <ModelViewer />
    </HomeStyled>
  )
})

export default Home
