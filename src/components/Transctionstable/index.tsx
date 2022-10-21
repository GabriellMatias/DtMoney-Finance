import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TrasnsactionContext";
import { Container } from "./style";



export function TransactionTable() {
  
  const {transaction} = useContext(TransactionsContext)
  

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>

              <td className={transaction.type}>
                {
                  /* blibioteca pra formatar o tipo de moeda que esta sendo usada
                  BRL*/
                  new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)
                }
              </td>

              <td>{transaction.category}</td>
              <td>
              {
                  new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createdAt)
                  )
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
