import Modal from "react-modal";
import { ButtonContainer, Container, TransactionTypeContainer } from "./style";
import closeImg from "../../assets/Close.svg";
import incomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saidas.svg";
import { useState } from "react";

interface ModalProps {
  isNewTransactionModalOpen: boolean;
  onCloseNewTransactionModal: () => void;
}


Modal.setAppElement("#root");

export function NewTransactionModal({
  isNewTransactionModalOpen,
  onCloseNewTransactionModal,
}: ModalProps) {

  const [type, setType] = useState("");

  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={onCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={onCloseNewTransactionModal}
      >
        <img src={closeImg} alt="Botao de Fechar modal" />
      </button>

      <Container>
        <h2>New Transaction</h2>

        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>

          <ButtonContainer
            type="button"
            onClick={() => {
              setType("deposity");
            }}
            isActive={type ==='deposity'}
            activeColor='green'
          >
            <img src={incomeImg} alt="" />
            <span>In Come</span>
          </ButtonContainer>

          <ButtonContainer
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type ==='withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt="" />
            <span>Out Come</span>
          </ButtonContainer>

        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">Registrer</button>
      </Container>
    </Modal>
  );
}
