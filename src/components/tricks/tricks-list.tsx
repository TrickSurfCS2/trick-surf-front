import { TricksListStyled } from './style'
import TricksListHeader from './tricks-header/tricks-list-header'
import TricksItem from './tricks-item/tricks-item'

import Loader from '#/components/ui/loader'
import type { Trick, Trigger } from '#/types/models/trick'

interface Props {
  isLoading: boolean
  tricks: Trick[]
  triggers: Trigger[]
}

const TricksList = observer((props: Props) => {
  const { tricks, triggers, isLoading } = props

  return (
    <TricksListStyled>
      <TricksListHeader />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {tricks?.map((trick) => <TricksItem key={trick.id} trick={trick} triggers={triggers} />)}
        </div>
      )}
    </TricksListStyled>
  )
})

export default TricksList
