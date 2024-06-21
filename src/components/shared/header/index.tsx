import { observer } from 'mobx-react-lite'
import type { ForwardedRef } from 'react'

import { GiNightSleep, GiSun } from 'react-icons/gi'
import { IoMdMenu, IoMdRainy } from 'react-icons/io'

import { HeaderStyled } from './style'

import type { ThemeVarious } from '#/contexts/theme'

const themeIcon = new Map<ThemeVarious, JSX.Element>([
  ['light', <GiSun key={1} />],
  ['dark', <GiNightSleep key={2} />],
  ['blue', <IoMdRainy key={3} />],
])

interface Props {
  onMenuClick: (e?: React.MouseEvent<unknown>) => void
}

// Header component
//* ------------------------------------------------------------------------------------------ *//
export const Header = observer(
  forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const { onMenuClick } = props

    const { appStore } = useAppStore()
    const {
      state: { theme },
      setTheme,
      headerOpacity,
    } = appStore

    const handleClickTheme = () => {
      const arr: ThemeVarious[] = ['blue', 'light', 'dark']
      const i = arr.indexOf(theme)
      setTheme(arr[i === arr.length - 1 ? 0 : i + 1])
    }

    return (
      <HeaderStyled ref={ref} opacity={headerOpacity}>
        <nav>
          <div>
            <ul>
              <li onClick={onMenuClick}>
                <IoMdMenu />
              </li>
            </ul>
            <ul>
              <li>surfgxds</li>
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
  }),
)

export default Header
