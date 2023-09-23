export const TricksStyled = styled.div`
  min-height: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 48px;

  max-width: 980px;
  margin: 0 auto;

  padding: 16px;

  ${breakpoint('sm')} {
    gap: 24px;
    padding: 8px;
  }
`
