import dt_logo from "../../assets/dt_logo_complete.svg";
import { Container } from "./style";

interface HeaderProps{
  onOpenNewTransactionModal: ()=> void
}
export function Header({onOpenNewTransactionModal}:HeaderProps) {
  

  return (
    <Container>
      <div>
        <img src={dt_logo} alt="Dt Money Logo" />
        <button type="button" onClick={onOpenNewTransactionModal}>New Transation</button> 
      </div>
    </Container>
  );
}
