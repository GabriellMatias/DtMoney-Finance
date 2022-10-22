import { useState } from "react";
import { DashBoard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTrasnsactions";
import { GlobalStyle } from "./styles/GlobalStyle";




export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  
  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }
  
  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <NewTransactionModal
        isNewTransactionModalOpen={isNewTransactionModalOpen}
        onCloseNewTransactionModal={handleCloseNewTransactionModal}
      />
      <DashBoard />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
