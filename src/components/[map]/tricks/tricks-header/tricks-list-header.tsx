/* eslint-disable no-case-declarations */
import { FaSortDown, FaSortUp } from 'react-icons/fa'

import cn from 'classnames'

import { TricksListHeaderStyled } from './style'

import type { TrickSortSetting } from '#/store/components/tricks.store'

const TricksListHeader = observer(() => {
  const { tricksStore } = useAppStore()
  const { filteringAndSetTricks, state } = tricksStore

  const onClickSort = (value: keyof TrickSortSetting) => () => {
    filteringAndSetTricks(value)
  }

  return (
    <TricksListHeaderStyled>
      <div className={cn('item', 'item-ind')}>
        <div onClick={onClickSort('index')}>
          <div>#</div>
        </div>
      </div>

      <div className={cn('item', 'item-tn')}>
        <div onClick={onClickSort('name')}>
          <div>trick</div>
          <div>Name</div>
        </div>
        <div className={cn('sort', state.sortedSettings['name'])}>
          <FaSortUp className="up" />
          <FaSortDown className="down" />
        </div>
      </div>

      <div className={cn('item', 'item-tp')}>
        <div className={cn('sort', state.sortedSettings['point'])}>
          <FaSortUp className="up" />
          <FaSortDown className="down" />
        </div>
        <div onClick={onClickSort('point')}>
          <div>trick</div>
          <div>points</div>
        </div>
      </div>

      <div className={cn('item', 'item-tc')}>
        <div className={cn('sort', state.sortedSettings['totalCompletes'])}>
          <FaSortUp className="up" />
          <FaSortDown className="down" />
        </div>
        <div onClick={onClickSort('totalCompletes')}>
          <div>total</div>
          <div>completes</div>
        </div>
      </div>

      {/* {isLoggedIn && (
        <div className={cn("item", "item-mc")}>
          <div
            className={cn(styles.sort, {
              [styles.sortUp]: sortSettings.dir === 'asc',
              [styles.sortDown]: sortSettings.dir === 'desc',
              [styles.sortActive]: sortSettings.sort === 'myCompletes'
            })}>
            <FaSortUp />
            <FaSortDown />
          </div>
          <div onClick={onClickSort('myCompletes')}>
            <div>my</div>
            <div>completes</div>
          </div>
        </div>
      )} */}

      <div className={cn('item', 'item-tl')}>
        <div className={cn('sort', state.sortedSettings['trickLength'])}>
          <FaSortUp className="up" />
          <FaSortDown className="down" />
        </div>
        <div onClick={onClickSort('trickLength')}>
          <div>trick</div>
          <div>length</div>
        </div>
      </div>
    </TricksListHeaderStyled>
  )
})

export default TricksListHeader
