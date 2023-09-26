import type { FC } from 'react'
import { Fragment } from 'react'

import Helmet from 'react-helmet'

import { RecordsStyled } from './style'

const Records: FC = observer(() => {
  const store = useAppStore()

  const { map } = store.appStore

  return (
    <Fragment>
      <Helmet>
        <title>{map.fullName + ' | Records'}</title>
        <meta property="og:title" content={map.fullName + ' | Records'} />
        <meta name="description" content={`List of all last records for the ${map.fullName} map`} />
      </Helmet>
      <RecordsStyled>
        <div className="dev">
          <span>IN DEVELOPMENT</span>
        </div>
      </RecordsStyled>
    </Fragment>
  )
})

export default Records
