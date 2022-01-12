//import './App.css';
import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

/* const defaultTodos = [
  {
    text: "cortar cebollas",
    completed: false,
  },
  {
    text: "cortar papas",
    completed: true,
  },
  {
    text: "cortar peras",
    completed: false,
  },
]; */

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
