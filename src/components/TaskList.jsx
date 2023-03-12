import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-white text-3xl font-bold text-center pt-16 pb-72 sm:py-12 md:py-12 lg:py-12 ">Sin tareas. </h1>;
  }
  return (
    <div  className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}  />
      ))}
    </div>
  );
}

export default TaskList;
