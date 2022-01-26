//import './App.css';
import React from "react";
import { Container } from "../Container";
import { CreateTodoButton } from "../CreateTodoButton";
import { EmptyTodos } from "../EmptyTodos";
import { Modal } from "../Modal";
import { useTodos } from "../../hooks/useTodos";
import { TodoCounter } from "../TodoCounter";
import { TodoForm } from "../TodoForm";
import { TodoHeader } from "../TodoHeader";
import { TodoItem } from "../TodoItem";
import TodoItemLoader from "../TodoItemLoader";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodosError } from "../TodosError";
import { EmptyTodosSearch } from "../EmptyTodosSearch";
import { ChangeAlert } from "../ChangeAlert";

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
  const { state, stateUpdaters } = useTodos();

  const {
    openModal,
    totalTodos,
    loading,
    error,
    completedTodos,
    searchValue,
    searchedTodos,
  } = state;

  const {
    addTodo,
    completeTodo,
    deleteTodo,
    setSearchValue,
    setOpenModal,
    syncTodos,
  } = stateUpdaters;

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      <Container>
        {/* <TodoContext.Consumer>
          {({ error, loading, searchedTodos, completeTodo, deleteTodo }) => ( */}
        <TodoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          totalTodos={totalTodos}
          searchText={searchValue}
          onError={() => <TodosError />}
          onLoading={() => <TodoItemLoader />}
          onEmpty={() => <EmptyTodos />}
          onEmptySearch={(searchText) => (
            <EmptyTodosSearch searchText={searchText} />
          )}
          /* render={(todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => {
                completeTodo(todo.text);
              }}
              onDelete={() => {
                deleteTodo(todo.text);              }}
            />
          )} */
        >
          {(todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => {
                completeTodo(todo.text);
              }}
              onDelete={() => {
                deleteTodo(todo.text);
              }}
            />
          )}
        </TodoList>

        {/*  )}
        </TodoContext.Consumer> */}
        {openModal ? (
          <Modal>
            <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
          </Modal>
        ) : null}
        <CreateTodoButton setOpenModal={setOpenModal} />
        <ChangeAlert sincronize={syncTodos} />
        {/* <ChangeAlertWithStorageListener sincronize={syncTodos} /> ESTO ES SI USO HOC*/}
      </Container>
    </React.Fragment>
  );
}

export default App;
