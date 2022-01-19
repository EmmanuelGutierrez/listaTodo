import React from "react";
import "./EmptyTodosSearch.css";
export function EmptyTodosSearch({ searchText }) {
  return <p className="messageStyle">No se encontro nada sobre {searchText}</p>;
}
