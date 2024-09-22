import { ReactNode, createContext, useContext, useState } from "react";


const AmountContext = createContext<{
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}>({
  amount: 10,
  setAmount: () => {} 
});
export const AmountProvider = ({ children }: { children: ReactNode }) => {
  const [amount, setAmount] = useState(10);
  

  return (
    <AmountContext.Provider value={{ amount, setAmount }}>
      {children}
    </AmountContext.Provider>
  );
};

export const useAmountProvider = () => useContext(AmountContext);
