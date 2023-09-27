import type { FC } from 'react'

import { TricksStyled } from './style'

import TricksList from '#/components/[map]/tricks/tricks-list'

// Tricks page
//* ------------------------------------------------------------------------------------------ *//
const Tricks: FC = observer(() => {
  const store = useAppStore()
  const { isLoading, tricks, triggers } = store.tricksStore.state

  return (
    <TricksStyled>
      <TricksList isLoading={isLoading} tricks={tricks} triggers={triggers} />
    </TricksStyled>
  )
})

export default Tricks
