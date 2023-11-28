import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Global } from '@emotion/react'

import App from '#/pages/app'
import { GlobalStyles } from '#/styles/common'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <>
    <Global styles={GlobalStyles} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
)
