import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import Parent from "./ContextAPI/parent";
import ExpenseHome from "./ExpenseTracking/ETHOME";
import CounterContext from "./ContextAPI/HistoryContext";
import { TransectionProvider } from "./ContextAPI/HistoryContext";
function App() {
  return (
    <TransectionProvider>
      <Parent />
    </TransectionProvider>
  );
}

export default App;
