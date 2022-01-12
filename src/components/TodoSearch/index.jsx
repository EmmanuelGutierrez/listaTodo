import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <div className="TodoSearch-Container">
      <label htmlFor="">Buscador de tareas</label>
      <input
        className="TodoSearch"
        onChange={onSearchValueChange}
        value={searchValue}
        placeholder="Comprar comida para la michi"
      />
    </div>
  );
}
export { TodoSearch };
