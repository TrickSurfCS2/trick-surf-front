import type { FC } from 'react'

import { TricksStyled } from './style'

import TricksList from '#/components/tricks/tricks-list'
import TricksStore from '#/store/components/tricks.store'

const Tricks: FC = observer(() => {
  const store = useNewStore(TricksStore)
  const { isLoading, tricks, triggers } = store.state
  const { appStore } = useAppStore()
  const { selectedMap } = appStore.state

  useEffect(() => {
    if (!store.state.isLoaded) {
      store.fetchTricks(selectedMap.id)
    }
  }, [])

  return (
    <TricksStyled>
      <div className="header">
        <img src={getFullImageUrl(selectedMap.preview)} className="header-back" />
        <div className="header-title">{selectedMap.fullName}</div>
      </div>
      <div className="sections">
        <div className="sections-wrapper">
          <div>tricks</div>
          <div> | </div>
          <div>triggers</div>
          <div> | </div>
          <div>records</div>
        </div>
      </div>
      <div className="content">
        <TricksList isLoading={isLoading} tricks={tricks} triggers={triggers} />
      </div>
    </TricksStyled>
  )
})

export default Tricks
