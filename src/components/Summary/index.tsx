import { Container } from "./style";
import icomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saidas.svg";
import totalImg from "../../assets/Total.svg";
import { TransactionsContext } from "../../TrasnsactionContext";
import { useContext } from "react";

export function Summary() {

  const {transaction} = useContext(TransactionsContext)

  return (
    <Container>
      
      <div>
        <header>
          <p>Entradas</p>
          <img src={icomeImg} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={outcomeImg} alt="Entradas" />
        </header>
        <strong>R$500,00</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
