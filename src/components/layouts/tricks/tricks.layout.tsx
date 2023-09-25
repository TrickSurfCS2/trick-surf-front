import type { FC, PropsWithChildren } from 'react'

import { TricksStyled } from './tricks.style'

import { useSetMap } from '#/hooks/user-set-map'

// Tricks layout
//* ------------------------------------------------------------------------------------------ *//
const TricksLayout: FC<PropsWithChildren> = ({ children }) => {
  const map = useSetMap()

  return <TricksStyled>{map.id && children}</TricksStyled>
}

export default TricksLayout
