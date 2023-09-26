export const TricksStyled = styled.div`
  position: relative;
  min-height: 100%;

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

    &-item {
      cursor: pointer;
      &:hover {
        color: ${({ theme }) => theme.palette.bg.highlight};
        transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      transition: 0.2s ease-out;
    }

    &-wrapper {
      display: flex;
      justify-content: center;
      gap: 15px;

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

    > section {
      animation: fadein 0.4s ease-in;
    }
  }

  ${breakpoint('sm')} {
    gap: 24px;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`
