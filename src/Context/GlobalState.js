import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state

const initialState = {
  transactions: []
};

//create Context
export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = ({ children }) => {
  // when we need to use reducer we need to use dispatch actions
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function addTransaction(transaction) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }

  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
