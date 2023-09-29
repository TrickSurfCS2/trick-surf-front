export const FaqStyled = styled.section`
  margin: 0 auto;
  max-width: 1368px;
  padding: 5px;

  * code {
    color: ${({ theme }) => theme.palette.bg.highlight};
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    font-size: 0.95rem;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: 1.5rem;
    letter-spacing: 10px;

    margin-top: 25px;
  }

  .hr {
    position: relative;

    display: flex;
    align-items: flex-end;

    border-bottom: 1px solid ${({ theme }) => theme.palette.border.content};
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 400;
    font-size: 1.5rem;
    margin-top: 25px;
    margin-bottom: 5px;
    padding: 5px 0;
  }

  .about {
    &-item {
      display: flex;
      flex-direction: row;
    }

    &-text {
      color: ${({ theme }) => theme.palette.text.primary};
      font-size: 1.1rem;
    }
  }

  .commands {
    &-item {
      display: flex;
      flex-direction: row;
    }

    &-text {
      color: ${({ theme }) => theme.palette.text.primary};
      font-size: 1.1rem;
    }
  }
`
