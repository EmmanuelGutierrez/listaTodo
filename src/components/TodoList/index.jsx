import React from "react";
import "./TodoList.css";
function TodoList(props) {
  const {
    error,
    loading,
    onError,
    onLoading,
    searchedTodos,
    onEmpty,
    render,
    totalTodos,
    onEmptySearch,
    searchText,
    children,
  } = props;
  return (
    <section>
      {/* <ul>{props.children}</ul> */}
      {error && onError()}
      {loading && onLoading()}

      {!loading && !searchedTodos?.length && !totalTodos && onEmpty()}
      {!!totalTodos && !searchedTodos?.length && onEmptySearch(searchText)}
      {!loading && searchedTodos.map(render || children)}
    </section>
  );
}

export { TodoList };
