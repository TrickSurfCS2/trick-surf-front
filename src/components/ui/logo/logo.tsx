import { LogoStyled } from './logo.style'

export function Logo() {
  return (
    <LogoStyled>
      <svg viewBox="0 0 900 200">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="80%">
            Trickgxds
          </text>
          <text textAnchor="middle" x="50.8%" y="80%">
            Trickgxds
          </text>
        </symbol>

        <g className="g-ants">
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
        </g>
      </svg>
    </LogoStyled>
  )
}
