export const AppStyled = styled.main`
  position: relative;
  z-index: 3;

  min-height: 100vh;

  background-color: ${({ theme }) => theme.palette.bg.main};
  color: ${({ theme }) => theme.palette.text.primary};

  padding-top: ${({ theme }) => theme.sizes.header.height};
  padding-bottom: 50px;
`
