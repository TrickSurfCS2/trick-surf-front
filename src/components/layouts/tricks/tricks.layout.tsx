import type { FC, PropsWithChildren } from 'react'

import { TricksStyled } from './tricks.style'

import { useSetMap } from '#/hooks/user-set-map'

// Tricks layout
//* ------------------------------------------------------------------------------------------ *//
const TricksLayout: FC<PropsWithChildren> = observer(({ children }) => {
  const map = useSetMap()
  const store = useAppStore()
  const navigate = useNavigate()

  const { state, fetchTricks } = store.tricksStore

  useEffect(() => {
    if (!state.isLoaded && !!map.id) {
      fetchTricks(map.id)
    }
  }, [map.id])

  return (
    <TricksStyled>
      <div className="header">
        <img src={getFullImageUrl(map.preview)} className="header-back" />
        <div className="header-title">{map.fullName}</div>
      </div>
      <div className="sections">
        <div className="sections-wrapper">
          <div className="sections-item" onClick={() => navigate(`/${map.name}/tricks`)}>
            tricks
          </div>
          <div> | </div>
          <div className="sections-item" onClick={() => navigate(`/${map.name}/triggers`)}>
            triggers
          </div>
          <div> | </div>
          <div className="sections-item" onClick={() => navigate(`/${map.name}/records`)}>
            records
          </div>
        </div>
      </div>
      {!!map.id && <div className="content">{children}</div>}
    </TricksStyled>
  )
})

export default TricksLayout
