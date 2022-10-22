import { Container } from "./style";
import icomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saidas.svg";
import totalImg from "../../assets/Total.svg";
import { useTransactions } from "../../hooks/useTrasnsactions";

export function Summary() {

  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposity'){
        acc.deposits += transaction.amount
        acc.total += transaction.amount
      }else {
        acc.withdraw += transaction.amount
        acc.total -= transaction.amount
      }
      return acc

    },
    { deposits: 0, withdraw: 0, total: 0 }
  );

  return (
    <Container>
      
      <div>
        <header>
          <p>Entradas</p>
          <img src={icomeImg} alt="Entradas" />
        </header>
        <strong>{
                  /* blibioteca pra formatar o tipo de moeda que esta sendo usada
                  BRL*/
                  new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(summary.deposits)
                }</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>- {
                  new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(summary.withdraw)
                }</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>{
                  new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(summary.total)
                }</strong>
      </div>
    </Container>
  );
}
