import styled from 'styled-components';

export const Container = styled.footer`
  padding-bottom: 2rem;

  > div {
    display: flex;
    
    > span {
      align-self: flex-end;
      font-weight: 500;
      font-size: 1.6rem;
    }

    > button {
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      border: 0;
      background: var(--white);
      color: var(--secondary);

      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 0.4rem;

      transition: background-color 0.2s, color 0.2s;

      &:hover {
        background-color: var(--primary);
        color: var(--white);
      }

      &:disabled {
        cursor: default;
        background-color: var(--primary);
        color: var(--white);
      }
    }

    > button:first-child, button:last-child {
      background: none;
      color: var(--secondary);
      font-size: 1.4rem;

      &:hover {
        background: none;
        color: var(--terciary)
      }

      &:disabled {
        opacity: 0.3;

        &:hover {
          color: var(--secondary);
        }
      }
    }
  }
`;
