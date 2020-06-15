import React, { createContext, useState, useEffect } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const initialTask = JSON.parse(localStorage.getItem("task")) || [];
  const [tasks, setTasks] = useState(initialTask);
  const [editTaskItem, setEditTaskItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: tasks.length + 1 }]);
  };

  const deleteAllTask = (title) => {
    setTasks([]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const findTask = (id) => {
    setEditTaskItem(tasks.find((task) => task.id === id));
  };

  const editTask = (id, title) => {
    setTasks(tasks.map((task) => (task.id === id ? { title, id } : task)));
    setEditTaskItem(null);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        editTaskItem,
        deleteTask,
        deleteAllTask,
        findTask,
        editTask,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
