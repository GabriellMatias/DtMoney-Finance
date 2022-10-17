import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &:placeholder {
      color: var(--text);
    }
    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    border: none;
    width: 100%;
    height: 4rem;
    background: var(--green);
    border-radius: 5px;
    font-weight: 600;
    font-size: 1rem;
    padding: 0 1.5rem;
    margin-top: 1.5rem;

    /*estudar*/
    line-height: 24px;

    color: var(--white);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface ButtonContainerProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}
const colors = {
  green: "#33CC95",
  red: "#E62E4D",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  height: 4rem;

  border-radius: 0% 0.5rem;
  border: 1.5px solid var(--white-800);

  background: ${props => props.isActive?
  transparentize(0.9, colors[props.activeColor]):'transparent'};

  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  img {
    width: 25px;
    height: 25px;
  }

  span {
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;
  }

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }
`;