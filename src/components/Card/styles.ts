import styled from 'styled-components';

export const Container = styled.div`
  background: var(--white);
  border-radius: 4px;

  display: flex;
  justify-content: space-between;

  > div {
      height: 8.4375rem;
      width: 8.4375rem;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

    > img {
      height: 8.4375rem;
    }
  }

  > section {
    padding: 0.32rem;
    display: flex;
    flex-direction: column;
    flex: 1;

    > h1 {
      font-size: 1rem;
      color: var(--primary);
      max-width: 14rem;
      height: 1.2rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    > h2 {
      font-size: 1rem;
      font-weight: 400;
      margin: 0.2rem 0 0.6rem;
      max-width: 14rem;
      height: 1.2rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    > div {
      display: flex;
      justify-content: space-between;
      margin-top: 0.2rem;
      
      > span {
        color: var(--terciary);
        font-weight: 500;
        text-align: right;
        max-width: 10rem;
        height: 1.2rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-left: 0.5rem;
      }
    }

    > section {
      display: flex;
      justify-content: space-between;
      margin-top: 0.2rem;

      > span {
        font-weight: 500;
        text-align: right;
        max-width: 10rem;
        height: 1.2rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-left: 0.5rem;
      }
    }
  }

  @media (max-width: 720px) {
    width: 100%;
    max-width: 100%;
  }
`;
