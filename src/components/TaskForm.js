import React, { useContext, useState, useEffect } from "react";
import { TaskListContext } from "../context/taskslistContext";

const Taskform = () => {
  const { addTask, editTask, editTaskItem, deleteAllTask } = useContext(
    TaskListContext
  );

  const [title, setTitle] = useState("");

  useEffect(() => {
    if (!!editTaskItem) setTitle(editTaskItem.title);
  }, [editTaskItem]);

  const addTaskHandler = (e) => {
    e.preventDefault();
    !editTaskItem ? addTask(title) : editTask(editTaskItem.id, title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={addTaskHandler}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="me"
          value={title}
          placeholder="Add task"
          required
        />
        <button>{editTaskItem ? "Edit Task" : "Add Task"}</button>
        <button onClick={deleteAllTask}>clear</button>
      </form>
    </div>
  );
};

export default Taskform;
