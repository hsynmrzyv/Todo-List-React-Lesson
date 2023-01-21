import { useState } from "react";

// Components
import Button from "./Button";

const AddTask = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const submitTaskHandler = (e) => {
    e.preventDefault();
    onAddTask(task);
    setTask("");
  };

  const enterTask = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="addTask">
      <form onSubmit={submitTaskHandler}>
        <input
          onChange={enterTask}
          value={task}
          type="text"
          placeholder="Add your task"
        />
        <Button>Add Task</Button>
      </form>
    </div>
  );
};

export default AddTask;
