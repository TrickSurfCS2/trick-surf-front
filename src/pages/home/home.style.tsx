export const HomeStyled = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 48px;
  height: 100%;

  margin: 0 auto;

  flex-grow: 1;
  
  padding: 16px;
  ${breakpoint('sm')} {
    gap: 24px;
    padding: 8px;
  }
`
