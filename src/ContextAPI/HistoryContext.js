import React, { Component, createContext, useReducer } from "react";
import TransectionReducer from "./TransReducer";
//const [Amounts, SetAmount] = useState(32);

const Transections = [
  { Amount: 400, Text: "Graphics" },
  { Amount: 700, Text: "Assignments" },
  { Amount: -900, Text: "Utility Bills" },
];

export const HistoryContext = createContext(Transections);

export const TransectionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransectionReducer, Transections);

  function addTransection(transObj) {
    dispatch({
      type: "ADD_TRANSECTION",
      payload: {
        Amount: transObj.Amount,
        Text: transObj.Text,
      },
    });
  }

  return (
    <HistoryContext.Provider value={{ Transections: state, addTransection }}>
      {children}
    </HistoryContext.Provider>
  );
};
