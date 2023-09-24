import type { ThemeVarious } from '#/contexts/theme'

const Breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  xxxl: 1920
}

export const breakpoint = (n: keyof typeof Breakpoints, size?: 'min' | 'max'): string => {
  return `@media (${size ?? 'max'}-width: ${Breakpoints[n]}px)`
}

export const pxToRem = (pxValue: number, baseFontSize: number): string => {
  return `${pxValue / baseFontSize || 16}rem`
}

const sizes = {
  header: { height: '50px' },
  content: { width: '1100px' }
}

const font = {
  family: {
    base: 'Rubik, sans-serif',
    monospace: `
    "sfmono-regular, menlo, monaco, consolas, 'Liberation Mono', 'Courier New'"
    `,
    text: 'Rubik'
  },
  size: {
    base: '1rem !default',
    lg: '1.25rem !default',
    sm: '0.875rem !default'
  }
}

const paletteLight = {
  text: {
    primary: 'rgba(0, 0, 0, 0.88)',
    secondary: 'rgba(0, 0, 0, 0.65)',
    tertiary: 'rgba(0, 0, 0, 0.45)',
    quaternary: 'rgba(0, 0, 0, 0.25)',
    primaryInvert: '#e0e0e0',
    //
    point: '#f59467',
    trickName: '#4e92ff',
    userName: '#67bbff',
    // [Suggested]
    pending: 'rgb(255, 184, 71)',
    accepted: 'rgb(114, 255, 114)',
    declined: 'rgb(255, 26, 26)',
    //
    header: '#e0e0e0'
  },
  bg: {
    main: '#eeeeee',
    content: '#e4e4e4',
    contentItem: '#d8d8d8',
    modal: '#333',
    modalContent: '#444',
    highlight: '#6db6ff',
    header: 'linear-gradient(to top right,  #232325, #292929, #232325)',
    headerBlur: 'rgba(24, 24, 24, 0.7)'
  },
  border: {
    header: '#7e7e7e',
    title: '#161b22',
    content: '#7e7e7e'
  },
  shadow: {
    itemContent: '0 0 5px rgba(0, 0, 0, 0.25)'
  }
}

const paletteDark = {
  text: {
    primary: '#e4e4e4',
    secondary: '#ababab',
    tertiary: '-',
    quaternary: '-',
    primaryInvert: '#e0e0e0',
    //
    point: '#f59467',
    trickName: '#4e92ff',
    userName: '#67bbff',
    // [Suggested]
    pending: 'rgb(255, 184, 71)',
    accepted: 'rgb(114, 255, 114)',
    declined: 'rgb(255, 26, 26)',
    //
    header: '#e0e0e0'
  },
  bg: {
    main: '#1e1f20',
    content: '#17181a',
    contentItem: '#141416',
    modal: '#333',
    modalContent: '#444',
    highlight: '#f65341',
    header: 'linear-gradient(to top right,  #232325, #292929, #232325)',
    headerBlur: 'rgba(24, 24, 24, 0.7)'
  },
  border: {
    header: '#474747',
    title: '#6c757d',
    content: '#474747'
  },
  shadow: {
    itemContent: '0 0 5px rgba(0, 0, 0, 0.25)'
  }
}

const paletteBlue = {
  text: {
    primary: '#e4e4e4',
    secondary: '#959595',
    tertiary: '-',
    quaternary: '-',
    primaryInvert: '#e0e0e0',
    //
    point: '#f59467',
    trickName: '#4e92ff',
    userName: '#67bbff',
    // [Suggested]
    pending: 'rgb(255, 184, 71)',
    accepted: 'rgb(114, 255, 114)',
    declined: 'rgb(255, 26, 26)',
    //
    header: '#e0e0e0'
  },
  bg: {
    main: '#0d1117',
    content: '#161b22',
    contentItem: '#12161b',
    modal: '#1b222c',
    modalContent: '#141d27',
    highlight: '#6db6ff',
    header: 'linear-gradient(to top right,  #161b22, #1d242d, #161b22)',
    headerBlur: 'rgba(22, 27, 34, 0.7)'
  },
  border: {
    header: '#161b22',
    title: '#5d6a7e',
    content: '#253241'
  },
  shadow: {
    itemContent: '0 0 5px rgba(0, 0, 0, 0.25)'
  }
}

export type ThemeTypes = typeof themeLigth

export const themeLigth = {
  palette: paletteLight,
  font,
  sizes
}

export const themeDark: ThemeTypes = {
  ...themeLigth,
  palette: {
    ...themeLigth.palette,
    ...paletteDark
  }
}

export const themeBlue: ThemeTypes = {
  ...themeLigth,
  palette: {
    ...themeLigth.palette,
    ...paletteBlue
  }
}

export const emotionThemes: Record<string, ThemeTypes> = {
  light: themeLigth,
  dark: themeDark,
  blue: themeBlue
}

export const getEmotionThemes = (theme: ThemeVarious): ThemeTypes => emotionThemes[theme]
