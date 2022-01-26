import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos(props) {
  const {
    items: todos,
    saveItem: saveTodos,
    error,
    loading,
    sincItem: syncTodos,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((t) => t.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (searchValue.length) {
    searchedTodos = todos.filter((t) => {
      const todoText = t.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  } else {
    searchedTodos = todos;
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((t) => t.text === text);
    const newTodos = [...todos];

    todos[todoIndex].completed = !todos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((t) => t.text === text);
    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const state = {
    openModal,
    totalTodos,
    loading,
    error,
    completedTodos,
    searchValue,
    searchedTodos,
  };
  const stateUpdaters = {
    addTodo,
    completeTodo,
    deleteTodo,
    setSearchValue,
    setOpenModal,
    syncTodos,
  };

  return {
    state,
    stateUpdaters,
  };
}

export { useTodos };
