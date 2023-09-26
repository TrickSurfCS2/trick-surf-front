export const TriggersListStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 0 4px;

  .item {
    position: relative;
    height: 100%;

    width: 25%;
    flex-grow: 1;

    padding: 8px;

    &-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding: 2px;
      background-color: ${({ theme }) => theme.palette.bg.content};
      border-radius: 10px;
      box-shadow: 0px 0px 5px ${({ theme }) => theme.palette.shadow.itemContent};
      width: 100%;
      height: 100%;

      &:hover {
        box-shadow: 0 0 5px ${({ theme }) => theme.palette.bg.highlight};
        transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      transition: 0.2s ease-out;
    }

    &-title {
      text-align: center;
      padding: 8px;
      font-size: 1.25rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &-img {
      border-radius: 6px;
      overflow: hidden;

      width: 225px;
      height: 225px;
    }
  }
`
