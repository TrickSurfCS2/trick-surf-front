import styled from '@emotion/styled'

export const FooterStyled = styled.footer`
  width: 100%;
  z-index: 10;
  font-size: 0px;
  background: ${({ theme }) => theme.palette.bg.main};

  svg {
    width: 100%;
    height: 40px;
    fill: ${({ theme }) => theme.palette.bg.header};
  }

  .content {
    width: 100%;
    height: ${({ theme }) => theme.sizes.footer.height};
    background: ${({ theme }) => theme.palette.bg.header};
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.8rem;
    display: flex;
    flex-direction: row;

    span {
      margin: 0 15px;
      color: ${({ theme }) => theme.palette.text.header};
    }

    &-item {
      color: ${({ theme }) => theme.palette.text.header};
      cursor: pointer;
      text-decoration: none;

      &:hover {
        color: ${({ theme }) => theme.palette.text.header};
      }
    }
  }
`
