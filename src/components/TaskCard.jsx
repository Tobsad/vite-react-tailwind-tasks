import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white  p-4 rounded-md overflow-auto">
      <h1 className="text-xl font-bold capitalize break-words">Tarea: {task.title}</h1>
      <p className="text-gray-500 text-sm break-words">Que hara: {task.description}</p>
      <button
        className="bg-red-600 px-2 py-1 rounded-md mt-4 hover:bg-red-500"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
