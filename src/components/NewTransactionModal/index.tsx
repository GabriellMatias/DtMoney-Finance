import Modal from "react-modal";
import { ButtonContainer, Container, TransactionTypeContainer } from "./style";
import closeImg from "../../assets/Close.svg";
import incomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saidas.svg";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { TransactionsContext } from "../../TrasnsactionContext";

interface ModalProps {
  isNewTransactionModalOpen: boolean;
  onCloseNewTransactionModal: () => void;
}
interface InputsProps {
  title: string;
  category: string;
  value: number;
  type: string
}

Modal.setAppElement("#root");

export function NewTransactionModal({
  isNewTransactionModalOpen,
  onCloseNewTransactionModal,
}: ModalProps) {
  /*UTILIZAR REACT-HOOK-FORMS*/
  //const newTransaction = useForm<InputsProps>({});
  const { register, handleSubmit, reset } = useForm<InputsProps>();
  const [type, setType] = useState("");
  const { createTransaction } = useContext(TransactionsContext);

  async function handleCreateNewTransaction(data: InputsProps) {
    await createTransaction({
      title: data.title,
      amount: data.value,
      category: data.category,
      type :data.type
    });
    reset();
    onCloseNewTransactionModal()
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
        <input type="number" placeholder="Valor" {...register("value")} />

        <TransactionTypeContainer>
          <ButtonContainer
            type="button"
            onClick={() => {
              setType("deposity");
            }}
            isActive={type === "deposity"}
            activeColor="green"
          >
            <img src={incomeImg} alt="" />
            <span>In Come</span>
          </ButtonContainer>

          <ButtonContainer
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
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
