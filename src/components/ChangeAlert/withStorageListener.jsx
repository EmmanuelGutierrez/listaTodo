import React, { useEffect, useState } from "react";

function withStorageListener(WrappedComponent) {
  return function WrappComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    useEffect(() => {
      const onChange = (change) => {
        if (change.key === "TODOS_V1") {
          console.log("CAMBIOS EN TODO V1");
          setStorageChange(true);
        }
      };

      window.addEventListener("storage", onChange);
      return () => {
        window.removeEventListener("storage", onChange);
      };
    }, []);

    const toggleShow = () => {
      props.sincronize();
      setStorageChange(false);
    };

    return <WrappedComponent show={storageChange} toggleShow={toggleShow} />;
  };
}

export { withStorageListener };
