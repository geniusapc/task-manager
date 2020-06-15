import React, { useContext } from "react";
import { TaskListContext } from "../context/taskslistContext";

export const Task = ({ task }) => {
  const { findTask, deleteTask } = useContext(TaskListContext);

  return (
    <div>
      <li>
        {task.title}
        <button onClick={() => findTask(task.id)}>edit</button>
        <button onClick={() => deleteTask(task.id)}>delete</button>
      </li>
    </div>
  );
};
