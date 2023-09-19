import { Logo } from '#/components/ui/logo/logo'
import { HomeStyled } from '#/styles/pages/home.style'

const Home = () => {
  return (
    <HomeStyled>
      <Logo />
      <div />
    </HomeStyled>
  )
}

export default observer(Home)
