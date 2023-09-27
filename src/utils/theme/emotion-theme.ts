import { paletteBlue } from './pallete/blue'
import { paletteDark } from './pallete/dark'
import { paletteLight } from './pallete/light'

import type { ThemeVarious } from '#/contexts/theme'
export type ThemeTypes = typeof themeLigth

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

const borderRadius = {
  X: 2,
  S: 4,
  M: 6,
  L: 8
}

const sizes = {
  header: { height: '50px' },
  footer: { height: '60px' },
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

export const themeLigth = {
  palette: paletteLight,
  font,
  sizes,
  borderRadius
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

export const color = {
  brand: {
    bg: '#e6f4ff',
    bgHover: '#bae0ff',
    border: '#91caff',
    borderHover: '#69b1ff',
    hover: '#4096ff',
    primary: '#1677ff',
    active: '#0958d9',
    textHover: '#4096ff',
    text: '#1677ff',
    textActive: '#0958d9'
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.88)',
    secondary: 'rgba(0, 0, 0, 0.65)',
    tertiary: 'rgba(0, 0, 0, 0.45)',
    quaternary: 'rgba(0, 0, 0, 0.25)',
    primaryInvert: '#e0e0e0',
    // [Surf]
    point: '#f59467',
    trickName: '#4e92ff',
    userName: '#67bbff'
  },
  bg: {
    layout: '#eeeeee',
    container: '#e4e4e4',
    containerItem: '#d8d8d8',
    elevated: '#333',
    spotlight: 'rgba(0, 0, 0, 0.85)',
    highlight: '#6db6ff'
  },
  fill: {
    primary: 'rgba(0, 0, 0, 0.15)',
    secondary: 'rgba(0, 0, 0, 0.06)',
    tertiary: 'rgba(0, 0, 0, 0.04)',
    quaternary: 'rgba(0, 0, 0, 0.02)'
  },
  border: {
    primary: '#d9d9d9',
    secondary: '#f0f0f0'
  },
  link: {
    hover: '#69b1ff',
    active: '#0958d9'
  },
  boxShadow: {
    primary:
      '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
    secondary:
      '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)'
  }
}
