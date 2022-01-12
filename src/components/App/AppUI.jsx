import React, { useContext } from "react";
import { Container } from "../Container";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoForm } from "../TodoForm";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";

function AppUI(props) {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <Container>
        {/* <TodoContext.Consumer>
          {({ error, loading, searchedTodos, completeTodo, deleteTodo }) => ( */}
        <TodoList>
          {error && <p>Hubo un error</p>}
          {loading && <p>Cargando</p>}
          {!loading && !searchedTodos.length && <p>Crea un Todo!</p>}
          {searchedTodos.map((todo) => (
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
          ))}
        </TodoList>
        {/*  )}
        </TodoContext.Consumer> */}
        {openModal ? (
          <Modal>
            <TodoForm />
          </Modal>
        ) : null}
        <CreateTodoButton setOpenModal={setOpenModal} />
      </Container>
    </React.Fragment>
  );
}

export { AppUI };
