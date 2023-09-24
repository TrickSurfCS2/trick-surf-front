import { theme } from 'antd'

import { getEmotionThemes } from './emotion-theme'

import type { ThemeTypes } from './emotion-theme'

import type { ThemeVarious } from '#/contexts/theme'

const themeAntdByEmotion = (emotion: ThemeTypes, currentTheme: ThemeVarious) => ({
  algorithm:
    currentTheme === 'dark' || currentTheme === 'blue'
      ? theme.darkAlgorithm
      : theme.defaultAlgorithm,
  token: {
    colorPrimary: emotion.palette.bg.highlight
  },
  components: {
    Tree: {
      colorBgContainer: 'transparent',
      colorPrimary: emotion.palette.bg.highlight
    },
    Tabs: {
      colorBorderSecondary: '#ababab'
    }
  }
})

export const getAntdThemes = (currentTheme: ThemeVarious) => {
  const emotion = getEmotionThemes(currentTheme)

  return themeAntdByEmotion(emotion, currentTheme)
}
