import { TricksListStyled } from './style'

import type { Trick, Trigger } from '#/types/models/trick.interface'

interface Props {
  tricks: Trick[]
  triggers: Trigger[]
}

///////////////////////////////////////////////////////////////////////////////////////////
const TricksList = (props: Props) => {
  // const { tricks, triggers } = props
  console.log('>', props.tricks, props.triggers)

  return (
    <TricksListStyled>
      {/* <TricksListHeader />
      {tricks?.map((trick) => {
        return <TricksItem key={trick.id} trick={trick} triggers={triggers} />
      })} */}
    </TricksListStyled>
  )
}

export default TricksList
