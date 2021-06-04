import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  height: 19.5rem;
  background: var(--primary);
  padding: 1.125rem 1.625rem;

  > div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    > section {
      height: 4.4rem;
      width: 4.4rem;
      border-radius: 50%;
      background: var(--white);

      display: flex;
      align-items: center;
      justify-content: center;
      
      > img {
        height: inherit;
      }
    }

    > button {
      border: 0;
      background: none;
      color: var(--white);

      display: flex;
      align-items: center;
      justify-content: center;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }

      > img {
        margin-left: 0.4rem;
      }
    }
  }

  > img {
    height: 12rem;
  }

  @media (max-width: 720px) {
    > div {
      > section {
        height: 2rem;
        width: 2rem;
      }
    }

    > img {
      margin-top: 1.5rem;
    }
  }
`;
