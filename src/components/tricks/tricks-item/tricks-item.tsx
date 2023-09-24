import cn from 'classnames'

import { TricksItemsStyled } from './style'

import type { Trick, Trigger } from '#/types/models/trick'

interface Props {
  trick: Trick
  triggers: Trigger[]
}

const TricksItem = (props: Props) => {
  const { trick, triggers } = props

  const [isActive, setIsActive] = useState<boolean>(false)
  const [route, setRoute] = useState<Trigger[] | null>(null)

  const handleClick = (trick: Trick) => () => {
    if (!route) {
      setRoute(
        deepCopy(
          (trick.routeIds?.split(',')?.map((id) => triggers.find((val) => val.id === +id)) ??
            []) as Trigger[]
        )
      )
    }
    setIsActive(!isActive)
  }

  return (
    <TricksItemsStyled
      onClick={handleClick(trick)}
      key={trick.id}
      className={cn({ active: isActive })}>
      <div className="inner">
        <div className={cn('item', 'item-ind')}>
          <div>{trick.index}</div>
        </div>

        <div className={cn('item', 'item-tn')}>
          <div>{trick.name}</div>
        </div>

        <div className={cn('item', 'item-tp')}>
          <div>{trick.point}</div>
        </div>

        <div className={cn('item', 'item-tc')}>
          <div>{trick.totalCompletes}</div>
        </div>

        {/* {isLoggedIn && (
          <div className={cn('item', 'item-mc')}>
            <div>{trick.myCompletes}</div>
          </div>
        )} */}

        <div className={cn('item', 'item-tl')}>
          <div>{trick.trickLength}</div>
        </div>
      </div>
      {isActive && route && (
        <div onClick={(e) => e.stopPropagation()} className="info">
          <div className="route">
            {route.map((trigger, key) => (
              <div key={trick.id + '|' + trigger.id + '|' + key} className="route-item">
                <div className={cn('route-content')}>
                  <div className="route-title">{trigger.name}</div>
                  <div className="route-img">
                    <img src={trigger.preview ?? ''} />
                  </div>
                  <div className="route-count">{key + 1}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="additional">
            {/* // TODO 
            <div className="record">
              <div className="record-item">
                {!wr.isLoading ? (
                  wr.swr.isErrors ? (
                    <Fragment>
                      <div className={styles.recordTitle}>Speed</div>
                      <div className={styles.recordNone}>none</div>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <div className={styles.recordTitle}>Speed</div>
                      <PlayerEmbend player={wr.swr.player} />
                      <div className={styles.recordRes}>{wr.swr.speed}</div>
                    </Fragment>
                  )
                ) : (
                  <Fragment>
                    <div className={styles.recordTitle}>Speed</div>
                    <div className={styles.recordLoad}>data records Loading...</div>
                  </Fragment>
                )}
              </div>
              <div className={styles.recordItem}>
                {!wr.isLoading ? (
                  wr.twr.isErrors ? (
                    <Fragment>
                      <div className={styles.recordTitle}>Time</div>
                      <div className={styles.recordNone}>none</div>
                    </Fragment>
                  ) : (
                    <Fragment>
                      <div className={styles.recordTitle}>Time</div>
                      <PlayerEmbend player={wr.twr.player} />
                      <div className={styles.recordRes}>{wr.twr.time}</div>
                    </Fragment>
                  )
                ) : (
                  <Fragment>
                    <div className={styles.recordTitle}>Time</div>
                    <div className={styles.recordLoad}>data records Loading...</div>
                  </Fragment>
                )}
              </div>
            </div> */}
            <div className="author">
              <div className="author-title">Created by</div>
              {trick?.authorSteamid64 ? (
                // TODO
                // <PlayerEmbend reverse={true} player={trick.authorSteamid} />
                <div>{trick.authorSteamid64}</div>
              ) : (
                <div>unknow</div>
              )}
              <div className="author-date-add">{new Date(trick.createdAt).toISOString()}</div>
            </div>
            {/* // TODO 
            <div className={styles.related}>
                <span
                  onClick={() => setIsRelatedActive(!isRelatedActive)}
                  className={styles.relatedTitle}
                >
                  {isRelatedActive ? 'unsow' : 'show'} related tricks
                </span>
              </div> */}
          </div>
          <div className="control">
            {/* // TODO
             <div className={styles.related}>
              <span
                onClick={() => setIsRelatedActive(!isRelatedActive)}
                className={styles.relatedTitle}>
                {isRelatedActive ? 'unsow' : 'show'} related tricks
              </span>
            </div> */}
          </div>
        </div>
      )}
    </TricksItemsStyled>
  )
}

export default TricksItem
