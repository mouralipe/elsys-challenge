import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    padding: 0 0.5rem;
    margin: 3.5rem auto 4.5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 2.5rem;
  }

  @media(max-width: 1280px) {
    > div {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
  }

  @media(max-width: 800px) {
    > div {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(1, 1fr);
      grid-gap: 2.5rem 0;
    }
  }
`;