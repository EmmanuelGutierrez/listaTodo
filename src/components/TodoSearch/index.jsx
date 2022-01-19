import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <div className="TodoSearch-Container">
      <label htmlFor="">Buscador de tareas</label>
      <input
        disabled={loading}
        className="TodoSearch"
        onChange={onSearchValueChange}
        value={searchValue}
        placeholder="Comprar comida para la michi"
      />
    </div>
  );
}
export { TodoSearch };
