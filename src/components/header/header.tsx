import { observer } from 'mobx-react-lite'
import type { FC } from 'react'

import { GiSun, GiNightSleep } from 'react-icons/gi'
import { IoMdRainy } from 'react-icons/io'
import { SiDungeonsanddragons } from 'react-icons/si'

import { HeaderStyled } from './style'

import type { ThemeVarious } from '#/contexts/theme'

const themeIcon = new Map<ThemeVarious, JSX.Element>([
  ['light', <GiSun key={1} />],
  ['dark', <GiNightSleep key={2} />],
  ['blue', <IoMdRainy key={3} />]
])

// Header component
//* ------------------------------------------------------------------------------------------ *//
const Header: FC = observer(() => {
  const { appStore } = useAppStore()
  const {
    state: { theme },
    setTheme,
    headerOpacity
  } = appStore

  const handleClickTheme = () => {
    const arr: ThemeVarious[] = ['blue', 'light', 'dark']
    const i = arr.indexOf(theme)
    setTheme(arr[i === arr.length - 1 ? 0 : i + 1])
  }

  return (
    <HeaderStyled opacity={headerOpacity}>
      <nav>
        <div>
          <ul>
            <li>
              <SiDungeonsanddragons />
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li onClick={handleClickTheme}>{themeIcon.get(theme)}</li>
          </ul>
        </div>
      </nav>
      {/* <Menu /> */}
    </HeaderStyled>
  )
})

export default Header
