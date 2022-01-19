import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";
import { Modal } from "../Modal";

const ChangeAlert = ({ sincronize }) => {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <Modal>
        <div className="ChangeAlert-container">
          <p>Ocurrieron cambios, hay que actualizar</p>
          <button
            className="ChangeAlertButton-button"
            onClick={() => {
              toggleShow(false);
            }}
          >
            Actualizar
          </button>
        </div>
      </Modal>
    );
  } else {
    return <></>;
  }
};

export { ChangeAlert };
