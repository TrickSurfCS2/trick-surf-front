/* eslint-disable no-case-declarations */
import { FaSortDown, FaSortUp } from 'react-icons/fa'

import cn from 'classnames'

import { TricksListHeaderStyled } from './style'

import type { Trick } from '#/types/models/trick'

interface Props {
  tricks: Trick[]
}

const TricksListHeader = observer((props: Props) => {
  const { tricks } = props

  console.log(tricks)

  const onClickSort = (value: string) => () => {
    switch (value) {
      case 'index':
        console.log('index')
        tricks.sort((a, b) => a.index - b.index)
        break
      case 'name':
        tricks.sort((a, b) => (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? 1 : -1))
        // console.log(tricks)
        break
      case 'point':
        // console.log('point')
        tricks.sort((a, b) => a.point - b.point)
        break
      case 'completes':
        console.log('completes')
        // tricks.sort((a, b) => a.totalCompletes - b.totalCompletes)
        break
      case 'len':
        console.log('len')
        // tricks.sort((a, b) => a.trickLength - b.trickLength)
        break
    }
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
})

export default TricksListHeader
