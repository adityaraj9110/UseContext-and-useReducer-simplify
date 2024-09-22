import { useReducer } from "react";

const initialState: number = 10;
const reducer = (
  state: number,
  action: { type: "credit" | "withdraw" | "amountGiven"; payload?: number }
) => {
  if (action.type === "credit") {
    return (state += 10);
  }
  if (action.type === "withdraw") {
    return (state -= 10);
  }
  if (action.type === "amountGiven" && action.payload) {
    return (state += action.payload);
  }
  return state;
};

export function useAmountReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    state,
    dispatch,
  };
}
