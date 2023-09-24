export const TricksItemsStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  cursor: pointer;

  &.active {
    background-color: ${({ theme }) => theme.palette.bg.content};
    border-radius: 5px;

    border-top: 1px solid ${({ theme }) => theme.palette.border.content};
    border-bottom: 1px solid ${({ theme }) => theme.palette.border.content};

    margin: 15px 0;
  }

  .inner {
    display: flex;
    flex-direction: row;
    width: 100%;

    &:hover {
      background-color: ${({ theme }) => theme.palette.bg.content};
      border-radius: 5px;
    }
  }

  .item {
    display: flex;
    flex-direction: column;

    font-size: 1.05rem;
    padding: 4px 5px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &-ind {
      width: 10%;
      min-width: 30px;
      max-width: 40px;

      font-size: 0.8rem;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.palette.text.secondary};
    }

    &-tn {
      width: 35%;
      color: ${({ theme }) => theme.palette.text.trickName};
      font-weight: 500;

      div {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &-none {
        color: ${({ theme }) => theme.palette.text.tertiary};
      }

      /* @include before-desktop {
        width: 80%;
      } */
    }

    &-tp {
      color: ${({ theme }) => theme.palette.text.point};
      font-weight: 700;
      width: 25%;
      align-items: center;
    }

    &-tc {
      width: 25%;
      align-items: flex-end;
      padding-right: 10px;

      /* @include mobile {
        display: none;
      } */
    }

    &-mc {
      width: 25%;
      align-items: flex-end;
      padding-right: 10px;

      /* @include mobile {
        display: none;
      } */
    }

    &-tl {
      width: 15%;
      align-items: flex-end;
      padding-right: 10px;

      /* @include mobile {
        display: none;
      } */
    }
  }

  .info {
    padding-top: 10px;
    margin-bottom: 10px;
    margin-top: 2px;
    border-top: 1px solid ${({ theme }) => theme.palette.border.content};

    animation: trick-item-load 0.25s ease-in;
    cursor: default;
  }

  .route {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 0 4px;

    &-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;

      // width: 20%;
      // or
      width: 250px;
      flex-grow: 1;

      padding: 3px;

      /* @include tablet {
        width: 200px;
      }

      @include mobile {
        width: 180px; 
      }*/
    }

    &-content {
      padding: 2px;
      background-color: ${({ theme }) => theme.palette.bg.contentItem};
      border-radius: 10px;
      box-shadow: 0px 0px 5px ${({ theme }) => theme.palette.bg.content};
      width: 100%;
      height: 100%;

      &:hover {
        box-shadow: 0 0 5px ${({ theme }) => theme.palette.bg.highlight};
        transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      transition: 0.2s ease-out;

      &-active {
        box-shadow: 0 0 5px ${({ theme }) => theme.palette.bg.highlight};
        border: 1px solid ${({ theme }) => theme.palette.bg.highlight};
      }
    }

    &-title {
      text-align: center;
      padding: 2px;
      font-size: 1.1rem;

      /* @include tablet {
        font-size: 0.9rem;
      }

      @include mobile {
        font-size: 0.8rem;
      } */
    }

    &-img {
      user-select: none;
      height: 100%;
      width: 100%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 210px;
      cursor: pointer;

      /* @include tablet {
        height: 180px;
      }

      @include mobile {
        height: 150px;
      } */
    }

    &-count {
      font-size: 0.8rem;
      font-weight: 700;
      padding: 1px;
      text-align: center;

      /* @include tablet {
        font-size: 0.8rem;
      }

      @include mobile {
        font-size: 0.7rem;
      } */
    }
  }

  .additional {
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 5px;

    /* @include mobile {
      flex-direction: column;
    }

    @include tablet {
      flex-direction: column; 
    }*/
  }

  .record {
    animation: trick-item-load 0.5s ease-in;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    &-item {
      display: flex;
      flex-direction: row;
      padding: 5px;
      width: 100%;

      align-items: center;
      justify-content: flex-start;
    }

    &-title {
      width: 60px;
      font-size: 1rem;
    }

    &-res {
      margin-left: 10px;
      font-size: 1rem;
      font-weight: 900;
    }

    &-load {
      color: rgb(255, 94, 66);
      margin-left: 10px;
    }

    &-none {
      color: rgb(255, 94, 66);
    }

    &-player {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      color: ${({ theme }) => theme.palette.text.userName};
      gap: 5px;

      cursor: pointer;

      overflow: hidden;
    }
  }

  .author {
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 2px;

    /* @include mobile {
      border-top: 1px solid var(--color-border);
      border-bottom: 1px solid var(--color-border);
    }

    @include tablet {
      border-top: 1px solid var(--color-border);
      border-bottom: 1px solid var(--color-border);
    } */

    &-title {
      white-space: nowrap;
      font-size: 1rem;
    }

    &-date-add {
      white-space: nowrap;
      font-size: 0.9rem;
      color: ${({ theme }) => theme.palette.text.secondary};

      &::before {
        content: 'added ';
        font-size: 0.8rem;
      }
    }
  }

  @keyframes trick-item-load {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`
