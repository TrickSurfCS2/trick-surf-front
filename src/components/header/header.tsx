import type { ThemeVarious } from '#/contexts/theme'
import type { FC } from 'react'

import { GiSun, GiNightSleep } from 'react-icons/gi'
import { IoMdRainy } from 'react-icons/io'

import { HeaderStyled } from './header.style'

const themeIcon = new Map<ThemeVarious, JSX.Element>([
  ['light', <GiSun key={1} />],
  ['dark', <GiNightSleep key={2} />],
  ['blue', <IoMdRainy key={3} />]
])

// Header component
//* ------------------------------------------------------------------------------------------ *//
const Header: FC = observer(() => {
  const { appStore } = useAppStore()
  const { state, switchTheme } = appStore
  const { theme } = state

  return (
    <>
      <HeaderStyled>
        <div className="control">
          <span onClick={switchTheme}>{themeIcon.get(theme)}</span>
        </div>
      </HeaderStyled>
    </>
  )
})

export default Header
