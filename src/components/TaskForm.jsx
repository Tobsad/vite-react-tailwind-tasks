import React, { useState,useContext } from "react";
import {TaskContext} from '../context/TaskContext';

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)



  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-10 mb-4">
        <h1 className="text-3xl font-bold text-white text-center pb-8">Añadir Tareas</h1>
        <input required
          placeholder="Titulo de la tarea"
          type="text"
          onChange={(e) => {setTitle(e.target.value)}}
          value={title}
          className="bg-slate-100 p-3 w-full mb-2"
          autoFocus
        />
        <textarea required
          placeholder="Descripcion de la tarea"
          type="text-area"
          onChange={(e) => {setDescription(e.target.value)}}
          value={description}
          className="bg-slate-100 p-3 w-full mb-2"
        ></textarea>
        <button
        className="bg-indigo-500 px-3 py-1 text-white">Guardar Tarea</button>
      </form>
      <p className="text-xm font-bold text-white text-right pb-4">Hecho por: @said_soon</p>
    </div>
  );
}

export default TaskForm;
