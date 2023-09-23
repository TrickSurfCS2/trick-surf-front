import type { FC } from 'react'

import { TricksStyled } from './style'

import TricksList from '#/components/tricks/tricks-list'
import TricksStore from '#/store/components/tricks.store'

const Tricks: FC = observer(() => {
  const store = useNewStore(TricksStore)

  useEffect(() => {
    if (!store.state.isLoaded) {
      store.fetchTricks()
    }
  }, [])

  return (
    <TricksStyled>
      <div className="title">
        <h1>Tricks</h1>
      </div>
      <TricksList tricks={[]} triggers={[]} />
    </TricksStyled>
  )
})

export default Tricks
