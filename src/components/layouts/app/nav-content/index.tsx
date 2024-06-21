import type { FC } from 'react'
import { NavContentStyled } from './style'
import type { PanelStore } from '#/components/ui/panel/panel.store'

interface NavContentProps {
  panelStore: PanelStore
}

export const NavContent: FC<NavContentProps> = (props) => {
  const { panelStore } = props
  const navigate = useNavigate()

  const handleClick = (map: string) => () => {
    navigate(`/${map}/tricks`)
    panelStore.setIsVisible(false)
  }

  return (
    <NavContentStyled>
      <nav>
        <ul>
          <li onClick={handleClick('ski2')}>surf_ski2</li>
          <li onClick={handleClick('strafes')}>surf_strafes</li>
          <li onClick={handleClick('hns_tyo_docg_gxd')}>hns_tyo_docg</li>
        </ul>
      </nav>
    </NavContentStyled>
  )
}

export default NavContent
