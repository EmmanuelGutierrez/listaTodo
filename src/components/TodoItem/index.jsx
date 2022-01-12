import React from "react";
import "./TodoItem.css";
import { FaWindowClose } from "react-icons/fa";
import { BsFillCheckSquareFill } from "react-icons/bs";

function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed && "TodoItem-p--complete"}`}>
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <BsFillCheckSquareFill size={"2em"} />
      </span>
      <p className={`TodoItem-p `}>{props.text}</p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <FaWindowClose size={"1.5em"} />
      </span>
    </li>
  );
}

export { TodoItem };
