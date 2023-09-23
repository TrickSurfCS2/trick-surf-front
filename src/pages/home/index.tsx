import type { FC } from 'react'
import { Logo } from '#/components/ui/logo/logo'
import { HomeStyled } from './style'

const Home: FC = observer(() => {
  return (
    <HomeStyled>
      <Logo />
      <div />
    </HomeStyled>
  )
})

export default Home
