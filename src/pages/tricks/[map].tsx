/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from 'react'
import TricksList from '#/components/tricks/tricks-list'
import TricksStore from '#/store/components/tricks.store'
import { TricksStyled } from './style'

const Tricks: FC = observer(() => {
  const store = useNewStore(TricksStore)

  useEffect(() => {
    // store.setTricks
  }, [])

  return (
    <TricksStyled>
      <div className="title">
        <h1>Tricks</h1>
      </div>
      <TricksList tricks={{} as any} triggers={{} as any} />
      <div />
    </TricksStyled>
  )
})

export default Tricks
