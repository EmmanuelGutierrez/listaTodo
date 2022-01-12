import React, { createContext, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props) {
  const {
    items: todos,
    saveItem: saveTodos,
    error,
    loading,
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

    todos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((t) => t.text === text);
    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoProvider, TodoContext };
