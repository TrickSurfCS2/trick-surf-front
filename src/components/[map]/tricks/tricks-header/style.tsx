export const TricksListHeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.palette.border.content};
  position: sticky;
  top: 0;
  top: ${({ theme }) => theme.sizes.header.height};
  background-color: ${({ theme }) => theme.palette.bg.main};
  z-index: 10;

  -webkit-backdrop-filter: blur(8px) saturate(180%);
  backdrop-filter: blur(8px) saturate(180%);
  transition: transform 0.5s;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    content: '';
    opacity: 0.5;
  }

  .item {
    position: relative;

    display: flex;
    flex-direction: row;

    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 4px 5px;
    gap: 5px;

    cursor: pointer;

    &-ind {
      width: 10%;
      min-width: 30px;
      max-width: 40px;
      font-size: 1rem;
      align-items: center;
      justify-content: center;
    }

    &-tn {
      align-items: center;

      width: 35%;

      /* @include before-desktop {
        width: 80%;
      } */
    }

    &-tp {
      width: 25%;
      align-items: center;
      justify-content: center;

      > * {
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      padding-right: 25px;
    }

    &-tc {
      width: 25%;
      align-items: center;
      justify-content: flex-end;

      > * {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
      }

      /* @include mobile {
        display: none;
      } */
    }

    &-mc {
      width: 25%;
      align-items: center;
      justify-content: flex-end;

      > * {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
      }

      /* @include mobile {
        display: none;
      } */
    }

    &-tl {
      width: 15%;
      align-items: center;
      justify-content: flex-end;

      > * {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
      }

      /* @include mobile {
        display: none;
      } */
    }
  }

  .sort {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    width: 20px;

    svg {
      width: 15px;
      height: 15px;
    }

    &-up {
      :first-of-type {
        opacity: 1;
      }
    }

    &-down {
      :last-child {
        opacity: 1;
      }
    }

    &-active {
      opacity: 1;
    }
  }

  .desc {
    .up {
      color: ${({ theme }) => theme.palette.text.primary};
    }

    .down {
      color: ${({ theme }) => theme.palette.text.trickName};
    }
  }

  .asc {
    .up {
      color: ${({ theme }) => theme.palette.text.trickName};
    }

    .down {
      color: ${({ theme }) => theme.palette.text.primary};
    }
  }

  .none {
    .up,
    .down {
      opacity: 0;
    }
  }
`
