import type { FC } from 'react'

import { HomeStyled } from './style'

import { Logo } from '#/components/ui/logo/logo'

// Home page
//* ------------------------------------------------------------------------------------------ *//
const Home: FC = observer(() => {
  return (
    <HomeStyled>
      <Logo />
      <div />
    </HomeStyled>
  )
})

export default Home
