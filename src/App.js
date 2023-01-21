// Styles
import "./App.css";

// Hooks
import { useState } from "react";

// Components
import TaskList from "./Components/TaskList";
import AddTask from "./Components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTasks = (task) => {
    setTasks([...tasks, { title: task, id: Math.random().toString() }]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <div>
      <AddTask onAddTask={addTasks} />
      {tasks.length > 0 && <TaskList tasks={tasks} onDelete={deleteTask} />}
    </div>
  );
};

export default App;
