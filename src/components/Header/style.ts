import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);

  > div {
    max-width: 70rem;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 4px;
    height: 3rem;
    /*toda vez que a prop filter for alterada ele faz a transicao mais leve*/
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
