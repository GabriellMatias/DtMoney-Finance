import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  createdAt: string;
  category: string;
}
interface TransactionsProviderProps {
  children: ReactNode;
}
interface TransactionsDataProps{
  transactions: TransactionProps[]
  createTransaction: (transaction: TransactionInputProps) =>Promise<void>
}

/* pega todos os campos da interface e omite esses que nao preciso, entao 
nao precisa recriar a interface e sim reaproveitar outras. o OMIT  OMITE, O PICK PEGA
APENAS AS TIPAGENS QUE VC QUER */

type TransactionInputProps = Omit<TransactionProps, "id" | "createdAt">;

const TransactionsContext = createContext<TransactionsDataProps>(
  {} as TransactionsDataProps);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      /* cuidado para nao pegar apenas o objeto, pegar os valores desse objeto*/
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput:TransactionInputProps) {
    
    const response = await api.post("/transactions", {...transactionInput, 
      createdAt:new Date()});
      
    const {transaction} = response.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions(){
  const context = useContext(TransactionsContext)
  return context
}