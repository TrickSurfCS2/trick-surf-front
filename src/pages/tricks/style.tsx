export const TricksStyled = styled.div`
  min-height: 100%;
  position: relative;

  .header {
    position: relative;
    height: 100%;
    min-height: calc(100vw / 6);
    max-height: calc(100vw / 6);
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    &-title {
      font-size: 2rem;
    }

    &-back {
      position: absolute;
      object-fit: cover;
      top: 0;
      z-index: 4;
      opacity: 0.4;
      width: 100%;
      height: 100%;
      filter: blur(4px);
    }
  }

  .sections {
    width: 100vw;
    height: 36px;
    background-color: ${({ theme }) => theme.palette.bg.content};

    display: flex;
    align-items: center;
    justify-content: center;

    &-wrapper {
      display: flex;
      justify-content: center;
      gap: 15px;
      cursor: pointer;

      color: ${({ theme }) => theme.palette.text.secondary};
      max-width: ${({ theme }) => theme.sizes.content.width};
      width: 100%;

      > div {
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.7rem;
        font-weight: 600;
      }
    }

    border-top: 1px solid ${({ theme }) => theme.palette.border.content};
    border-bottom: 1px solid ${({ theme }) => theme.palette.border.content};
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 48px;

    max-width: ${({ theme }) => theme.sizes.content.width};
    width: 100%;
    margin: 0 auto;
    margin-top: 32px;

    padding: 16px;
  }

  ${breakpoint('sm')} {
    gap: 24px;
    padding: 8px;
  }
`
