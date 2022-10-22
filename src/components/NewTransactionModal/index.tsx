import Modal from "react-modal";
import { ButtonContainer, Container, TransactionTypeContainer } from "./style";
import closeImg from "../../assets/Close.svg";
import incomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saidas.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTransactions } from "../../hooks/useTrasnsactions";

interface ModalProps {
  isNewTransactionModalOpen: boolean;
  onCloseNewTransactionModal: () => void;
}
interface InputsProps {
  title: string;
  category: string;
  value: number;
  type: string;
}

Modal.setAppElement("#root");

export function NewTransactionModal({
  isNewTransactionModalOpen,
  onCloseNewTransactionModal,
}: ModalProps) {
  /*UTILIZAR REACT-HOOK-FORMS*/
  //const newTransaction = useForm<InputsProps>({});
  const { register, handleSubmit, reset } = useForm<InputsProps>();
  const [typeTransaction, setTypeTransaction] = useState("");

  /*usando hook criado*/
  const { createTransaction } = useTransactions();

  async function handleCreateNewTransaction(data: InputsProps) {
    /* coloca o await pq pra fechar o modal apenas quando for adicionado a nova
    transacao*/
    await createTransaction({
      title: data.title,
      amount: data.value,
      category: data.category,
      type: typeTransaction,
    });
    reset();
    onCloseNewTransactionModal();
  }

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

      <Container onSubmit={handleSubmit(handleCreateNewTransaction)}>
        <h2>New Transaction</h2>

        <input type="text" placeholder="Titulo" {...register("title")} />
        <input
          type="number"
          placeholder="Valor"
          {...register("value", {
            valueAsNumber: true,
          })}
        />

        <TransactionTypeContainer>
          <ButtonContainer
            type="button"
            onClick={() => {
              setTypeTransaction("deposity");
            }}
            isActive={typeTransaction === "deposity"}
            activeColor="green"
          >
            <img src={incomeImg} alt="" />
            <span>In Come</span>
          </ButtonContainer>

          <ButtonContainer
            type="button"
            onClick={() => {
              setTypeTransaction("withdraw");
            }}
            isActive={typeTransaction === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="" />
            <span>Out Come</span>
          </ButtonContainer>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" {...register("category")} />

        <button type="submit">Registrer</button>
      </Container>
    </Modal>
  );
}
