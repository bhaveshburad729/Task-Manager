import "../styles/task.css";

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="task-item">
      <span className={`task-title ${task.completed ? "completed" : ""}`}>
        {task.title}
      </span>

      <button onClick={() => onToggle(task.id)}>Toggle</button>

      <button
        className="delete-btn"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
