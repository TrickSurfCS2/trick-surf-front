import type { FC, PropsWithChildren, ReactElement } from 'react'

import { TbFaceIdError } from 'react-icons/tb'

import { Catch } from './catch'
import './error.css'

export const ErrorBoundary: FC<PropsWithChildren> = (props, error: Error | null): ReactElement => {
  const { children } = props

  if (error) {
    const { message, name } = error

    return (
      <div className="error">
        <TbFaceIdError />
        <div>
          <span>Smth wrong</span>
          {name}
        </div>
        <div>
          <span>Error message</span>
          {message}
        </div>
        <div className="footer">sorry</div>
      </div>
    )
  }

  return <>{children}</>
}

// eslint-disable-next-line react-refresh/only-export-components
export default Catch(ErrorBoundary)
