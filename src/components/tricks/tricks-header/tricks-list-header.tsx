import { FaSortDown, FaSortUp } from 'react-icons/fa'

import cn from 'classnames'

import { TricksListHeaderStyled } from './style'

const TricksListHeader = () => {
  const onClickSort = (value: string) => () => {
    console.log('> sorts', value)
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
        <div className={cn('sort')}>
          <FaSortUp />
          <FaSortDown />
        </div>
      </div>

      <div className={cn('item', 'item-tp')}>
        <div className={cn('sort')}>
          <FaSortUp />
          <FaSortDown />
        </div>
        <div onClick={onClickSort('point')}>
          <div>trick</div>
          <div>points</div>
        </div>
      </div>

      <div className={cn('item', 'item-tc')}>
        <div className={cn('sort')}>
          <FaSortUp />
          <FaSortDown />
        </div>
        <div onClick={onClickSort('completes')}>
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
        <div className={cn('sort')}>
          <FaSortUp />
          <FaSortDown />
        </div>
        <div onClick={onClickSort('len')}>
          <div>trick</div>
          <div>length</div>
        </div>
      </div>
    </TricksListHeaderStyled>
  )
}

export default TricksListHeader
