export const TricksListHeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.palette.border.content};
  position: sticky;
  top: var(--header-height);
  background-color: var(--color-background);
  z-index: 10;

  .item {
    position: relative;
    height: 100%;

    display: flex;
    flex-direction: row;

    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 4px 5px;
    gap: 5px;

    cursor: pointer;

    &Ind {
      width: 10%;
      min-width: 30px;
      max-width: 40px;
      font-size: 1rem;
      align-items: center;
      justify-content: center;
    }

    &Tn {
      align-items: center;

      width: 35%;

      :first-child {
        color: var(--color-sub-text);
      }

      :last-child {
        color: var(--color-trick-name);
      }

      @include before-desktop {
        width: 80%;
      }
    }

    &Tp {
      width: 25%;
      align-items: center;
      justify-content: center;

      > * {
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      padding-right: 25px;

      :first-child {
        color: var(--color-sub-text);
      }

      :last-child {
        color: var(--color-point);
      }
    }

    &Tc {
      width: 25%;
      align-items: center;
      justify-content: flex-end;

      :first-child {
        color: var(--color-sub-text);
      }

      > * {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
      }

      @include mobile {
        display: none;
      }
    }

    &Mc {
      width: 25%;
      align-items: center;
      justify-content: flex-end;

      > * {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
      }

      :first-child {
        color: var(--color-sub-text);
      }

      @include mobile {
        display: none;
      }
    }

    &Tl {
      width: 15%;
      align-items: center;
      justify-content: flex-end;

      > * {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
      }

      :first-child {
        color: var(--color-sub-text);
      }

      @include mobile {
        display: none;
      }
    }
  }

  .sort {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    width: 20px;
    opacity: 0;

    > * {
      opacity: 0;
    }

    &Up {
      :first-child {
        opacity: 1;
      }
    }

    &Down {
      :last-child {
        opacity: 1;
      }
    }

    &Active {
      opacity: 1;
    }
  }
`
