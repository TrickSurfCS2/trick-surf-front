import type { FC } from 'react'

import { TricksStyled } from './style'

import TricksList from '#/components/tricks/tricks-list'
import TricksStore from '#/store/components/tricks.store'

const maps = {
  ski2: 1,
  strafes: 2
}

const Tricks: FC = observer(() => {
  const store = useNewStore(TricksStore)
  const { isLoading, tricks, triggers } = store.state
  const { map } = useParams()

  useEffect(() => {
    if (!store.state.isLoaded) {
      store.fetchTricks(maps[map as keyof typeof maps] ?? 1)
    }
  }, [])

  return (
    <TricksStyled>
      <div className="header">
        <img
          src={
            'https://steamuserimages-a.akamaihd.net/ugc/545299060946250158/B7932B1E86AC754DA920E2CBCB17D87DA4674407/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
          }
          className="header-back"
        />
      </div>
      <div className="header-section"></div>

      <div className="content">
        <TricksList isLoading={isLoading} tricks={tricks} triggers={triggers} />
      </div>
    </TricksStyled>
  )
})

export default Tricks
