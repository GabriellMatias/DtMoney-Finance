import styled from "styled-components";

export const Container = styled.main`
  margin-top: 4rem;
  table{
    width: 100%;
    border-spacing: 0 0.5rem;

    th{
      color: var(--text);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
    td{
      padding: 1rem 2rem;
      border: 0;
      background-color: var(--white);
      color: var(--text);
      

      &:first-child{
        color: var(--title);
        border-bottom-left-radius: 8px;
        border-top-left-radius: 8px;
      }
      &:last-child{
        border-bottom-right-radius: 8px;
        border-top-right-radius: 8px;
      }

      
      &.deposity{
        color: var(--green);
      }
      &.withdraw{
        color: var(--red);
      }
    }
  }
`;
