// TODO: this is from reducer

// import { Dispatch } from "react";
// import "./App.css";
// import { useAmountReducer } from "./Reduceer/Amount_Reducer/amount_reducer";

// function App() {
//   const { dispatch, state } = useAmountReducer();
//   return (
//     <>
//       <Amount state={state} />
//       <BtnGroup dispatch={dispatch} />
//     </>
//   );
// }

// export default App;

// function Amount({ state }: { state: number }) {
//   return <h1>THis is your balance: {state}</h1>;
// }

// function BtnGroup({
//   dispatch,
// }: {
//   dispatch: Dispatch<{
//     type: "credit" | "withdraw" | "amountGiven";
//     payload?: number;
//   }>;
// }) {
//   return (
//     <>
//       <button onClick={() => dispatch({ type: "credit" })}>
//         Click to credit
//       </button>
//       <button onClick={() => dispatch({ type: "withdraw" })}>
//         Click to withdraw
//       </button>
//       <button onClick={() => dispatch({ type: "amountGiven", payload: 100 })}>
//         Click to debit 100 rs
//       </button>
//     </>
//   );
// }

// TODO: This is from context provider

import "./App.css";
import {
  AmountProvider,
  useAmountProvider,
} from "./provider/AmountProvider/amount-provider";

function App() {
  return (
    <AmountProvider>
      <Amount />
      <BtnGroup />
    </AmountProvider>
  );
}

export default App;

function Amount() {
  const { amount } = useAmountProvider();
  return <h1>THis is your balance: {amount}</h1>;
}

function BtnGroup() {
  const { setAmount } = useAmountProvider();
  return (
    <button onClick={() => setAmount((prev) => prev + 10)}>
      Click to credit
    </button>
  );
}
