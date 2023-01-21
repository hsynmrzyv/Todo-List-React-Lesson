// Components
import Button from "./Button";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div className="taskList">
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <span>{task.title}</span>
              <Button onClick={() => onDelete(task.id)}>Delete Task</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
