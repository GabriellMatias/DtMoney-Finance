import Modal from "react-modal";
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
  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={onCloseNewTransactionModal}
    >
      <h2>New Transaction</h2>
    </Modal>
  );
}
