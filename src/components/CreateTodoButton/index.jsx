import React from "react";

import "./CreateTodoButton.css";

function CreateTodoButton({ todos, setTodos }) {
  const onClicEvent = (msg) => {
    return () => alert(msg);
  };

  return (
    <button className="CreateTodoButton" onClick={onClicEvent("Mensaje")}>
      +
    </button>
  );
}

export { CreateTodoButton };
