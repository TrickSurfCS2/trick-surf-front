import styled from '@emotion/styled'

export type Side = 'left' | 'right'

interface PanelStyledProps {
  isVisible: boolean
  width: string
  side: Side
}
export const PanelStyled = styled.div<PanelStyledProps>`
  position: fixed;
  ${({ side }) => `
    ${side}: 0;
  `}
  top: 0;
  display: flow-root;
  z-index: 5;
  height: 100%;

  width: ${({ width }) => width};
  padding-top: ${({ theme }) => theme.sizes.header.height};

  transform: translateX(
    ${({ side, width, isVisible }) => `
    ${
      !isVisible
        ? side === 'left'
          ? `
        calc((${width} + 40px) * -1)
        `
          : `
        calc(${width} + 40px)
        `
        : '0'
    }
  `}
  );
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1);

  > section {
    height: 100%;
    background: ${({ theme }) => theme.palette.bg.header};
    color: ${({ theme }) => theme.palette.text.header};
  }

  > div {
    position: absolute;
    top: ${({ theme }) => theme.sizes.header.height};
    transform: rotate(90deg);
    ${({ side }) => `
      ${side === 'left' ? 'right: -39px;' : 'left: 1px;'}
    `}
    top: 0;

    > svg {
      position: absolute;

      width: 100vh;
      height: 40px;
      ${({ side }) => `
        ${side === 'left' ? 'transform: rotate(0deg);' : 'transform: rotate(-180deg);'}
      `}
      fill: ${({ theme }) => theme.palette.bg.header};

      &:first-of-type {
        filter: blur(8px) saturate(180%);
      }
    }
  }
`
