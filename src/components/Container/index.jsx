import React from "react";
import "./Container.css";

function Container(props) {
  return <section className="Container">{props.children}</section>;
}

export { Container };
