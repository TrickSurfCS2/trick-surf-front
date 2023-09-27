import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Global } from '@emotion/react'

import App from '#/pages/App'
import { GlobalStyles } from '#/styles/common'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <>
    <Global styles={GlobalStyles} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
)

const getPallete = (primary) => {
  const lighten = (color, amount) => {
    const parseColor = (color) => {
      const hex = color.slice(1)
      const r = parseInt(hex.slice(0, 2), 16)
      const g = parseInt(hex.slice(2, 4), 16)
      const b = parseInt(hex.slice(4, 6), 16)
      return [r, g, b]
    }

    const formatColor = (color) => {
      const [r, g, b] = color
      const toHex = (value) => {
        const hex = value.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      }
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`
    }

    const [r, g, b] = parseColor(color)
    const lightenValue = (value) => Math.min(255, value + amount)
    const lightenedColor = [lightenValue(r), lightenValue(g), lightenValue(b)]
    return formatColor(lightenedColor)
  }

  const pallete = {
    colorPrimaryBg: lighten(primary, 200),
    colorPrimaryBgHover: lighten(primary, 150),
    colorPrimaryBorder: lighten(primary, 100),
    colorPrimaryBorderHover: lighten(primary, 50),
    colorPrimaryHover: lighten(primary, -50),
    colorPrimaryActive: lighten(primary, -200),
    colorPrimaryTextHover: lighten(primary, -50),
    colorPrimaryText: primary,
    colorPrimaryTextActive: lighten(primary, -200)
  }

  return pallete
}

const pallete = getPallete('#1677ff')
console.log(pallete)
