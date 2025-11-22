import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <div className="divide-y divide-slate-200">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;