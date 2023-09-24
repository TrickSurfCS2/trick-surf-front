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

    &-section {
      width: 100vw;
      height: 32px;
      background-color: ${({ theme }) => theme.palette.bg.content};

      border-top: 1px solid ${({ theme }) => theme.palette.border.content};
      border-bottom: 1px solid ${({ theme }) => theme.palette.border.content};
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 48px;

    max-width: ${({ theme }) => theme.sizes.content.width};
    width: 100%;
    margin: 0 auto;
    padding: 16px;
  }

  ${breakpoint('sm')} {
    gap: 24px;
    padding: 8px;
  }
`
