import { observer } from 'mobx-react-lite'
import type { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react'

import { ConfigProvider as ThemeAntdProvider } from 'antd'
import ruRU from 'antd/locale/ru_RU'

import { ThemeProvider as ThemeEmotionProvider } from '@emotion/react'

import { getAntdThemes } from '#/utils/theme/antd-theme'
import { getEmotionThemes } from '#/utils/theme/emotion-theme'

export interface ThemeValue {
  themeContext: ThemeVarious
  setThemeContext: Dispatch<SetStateAction<ThemeVarious>>
}

export type ThemeVarious = 'light' | 'dark' | 'blue'

// Theme provider setup
//* ------------------------------------------------------------------------------------------ *//
const ThemeProvider: FC<PropsWithChildren> = observer(({ children }) => {
  const { appStore } = useAppStore()
  const { theme: currentTheme } = appStore.state

  useIsomorphicLayoutEffect(() => {
    document.documentElement.setAttribute('data-color-mode', currentTheme)
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme])

  return (
    <ThemeEmotionProvider theme={getEmotionThemes(currentTheme)}>
      <ThemeAntdProvider locale={ruRU} theme={getAntdThemes(currentTheme)}>
        {children}
      </ThemeAntdProvider>
    </ThemeEmotionProvider>
  )
})

export default ThemeProvider
