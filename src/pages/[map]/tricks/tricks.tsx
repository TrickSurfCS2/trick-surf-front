import type { FC } from 'react'

import { TricksStyled } from './tricks.style'

import TricksList from '#/components/modules/[map]/tricks/tricks-list'

// Tricks page
//* ------------------------------------------------------------------------------------------ *//
const Tricks: FC = observer(() => {
  const store = useAppStore()
  const { isLoading, filteredTricks, triggers } = store.tricksStore.state

  return (
    <TricksStyled>
      <TricksList isLoading={isLoading} tricks={filteredTricks} triggers={triggers} />
    </TricksStyled>
  )
})

export default Tricks
