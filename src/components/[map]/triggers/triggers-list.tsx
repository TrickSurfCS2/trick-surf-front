import { Fragment } from 'react'

import { Image } from 'antd'

import { TriggersListStyled } from './style'

import Loader from '#/components/ui/loader'
import type { Trigger } from '#/types/models/trick'

interface Props {
  isLoading: boolean
  triggers: Trigger[]
}

const TriggersList = observer((props: Props) => {
  const { triggers, isLoading } = props

  return (
    <Fragment>
      {isLoading
        ? (
          <Loader />
          )
        : (
          <TriggersListStyled>
            {triggers?.map(({ id, preview, name }) => (
              <div key={id} className="item">
                <div className="item-inner">
                  <div className="item-title">{name}</div>
                  <div className="item-img">
                    <Image height="100%" alt="-" src={`${preview}`} />
                  </div>
                </div>
              </div>
            ))}
          </TriggersListStyled>
          )}
    </Fragment>
  )
})

export default TriggersList
