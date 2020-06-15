import React from "react";
import Task from "./Tasklist";
import TaskListContextProvider from "../context/taskslistContext";

const App = () => {
  return (
    <TaskListContextProvider>
      <div>
        <Task />
      </div>
    </TaskListContextProvider>
  );
};

export default App;
