/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react'

import { TricksStyled } from './style'

import TricksList from '#/components/tricks/tricks-list'
import TricksStore from '#/store/components/tricks.store'

const Tricks: FC = observer(() => {
  // const store = useNewStore(TricksStore)

  useEffect(() => {
    store.fetchTricks()
  }, [])

  return (
    <TricksStyled>
      <div className="title">
        <h1>Tricks</h1>
      </div>
      <TricksList tricks={{} as any} triggers={{} as any} />
    </TricksStyled>
  )
})

export default Tricks
