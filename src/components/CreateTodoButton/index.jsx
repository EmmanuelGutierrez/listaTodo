import React from "react";

import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClicEvent = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="CreateTodoButton" onClick={onClicEvent}>
      +
    </button>
  );
}

export { CreateTodoButton };
