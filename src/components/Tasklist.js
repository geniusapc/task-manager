import React, { useContext } from "react";
import { TaskListContext } from "../context/taskslistContext";
import { Task } from "./Task";
import TaskForm from "./TaskForm";
import { Header } from "./Header";

const Tasklist = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      <Header />
      <TaskForm />
      {tasks.length ? (
        <ul>
          {tasks.map((task) => (
            <Task task={task} key={task.id} />
          ))}
        </ul>
      ) : (
        "There is no task, please add a task"
      )}
    </div>
  );
};

export default Tasklist;
