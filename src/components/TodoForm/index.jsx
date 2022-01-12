import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  /* const onChange = (event) => {
    setNewTodoValue(event.target.value);
  }; */
  const onCancel = () => {
    setOpenModal(false);
  };
  const onAdd = (data) => {
    addTodo(data.text);
    setOpenModal(false);
  };
  return (
    <form onSubmit={handleSubmit(onAdd)}>
      <label>Escribe una nueva tarea</label>
      <textarea
        id="text"
        {...register("text", { required: true })}
        placeholder="Acariciar a la michi"
      />
      {errors.text && <span role="alert">Debe poner una tarea</span>}
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button-cancel"
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button-add" type="submit">
          Agregar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
