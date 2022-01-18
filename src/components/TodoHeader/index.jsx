import React, { Children, cloneElement } from "react";

function TodoHeader({ children, loading }) {
  /* cloneElement(elemento,{loading})  clona el elemento y le pasa la propiedad loading como true, necesita un elemento de react*/
  /* Children.toArray(children).map(child=> cloneElement(child,loading)) Maneja los children como un array, por cada child se lo clona y se le da loading*/
  return (
    <header>
      {Children.toArray(children).map((child) =>
        cloneElement(child, { loading })
      )}
    </header>
  );
}

export { TodoHeader };
