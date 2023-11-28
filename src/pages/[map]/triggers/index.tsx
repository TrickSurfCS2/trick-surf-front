import type { FC } from 'react'
import { Fragment } from 'react'

import Helmet from 'react-helmet'

import { TriggersStyled } from './style'

import TriggersList from '#/components/[map]/triggers/triggers-list'

// Triggers page
//* ------------------------------------------------------------------------------------------ *//
const Triggers: FC = observer(() => {
  const store = useAppStore()

  const { isLoading, triggers } = store.tricksStore.state
  const { map } = store.appStore

  return (
    <Fragment>
      <Helmet>
        <title>{`${map.fullName} | Triggers`}</title>
        <meta property="og:title" content={`${map.fullName} | Triggers`} />
        <meta
          name="description"
          content={`List of all available triggers for the ${map.fullName} map`}
        />
      </Helmet>
      <TriggersStyled>
        {/* // TODO filtering
          <div className="control">

          </div> */}

        <TriggersList isLoading={isLoading} triggers={triggers} />
      </TriggersStyled>
    </Fragment>
  )
})

export default Triggers
