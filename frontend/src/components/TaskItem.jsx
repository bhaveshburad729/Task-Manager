import { Trash2Icon, CheckCircleIcon, CircleIcon } from "lucide-react";

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors duration-200 group">
      {/* Toggle Button */}
      <button
        onClick={() => onToggle(task.id)}
        className="flex-shrink-0 text-slate-400 hover:text-blue-600 transition-colors duration-200 focus:outline-none"
        aria-label="Toggle task completion"
      >
        {task.completed ? (
          <CheckCircleIcon size={24} className="text-green-600" />
        ) : (
          <CircleIcon size={24} />
        )}
      </button>

      {/* Task Title */}
      <span
        className={`flex-1 text-lg transition-all duration-200 ${
          task.completed
            ? "line-through text-slate-400"
            : "text-slate-900 font-medium"
        }`}
      >
        {task.title}
      </span>

      {/* Delete Button */}
      <button
        onClick={() => onDelete(task.id)}
        className="flex-shrink-0 p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100 focus:outline-none focus:opacity-100"
        aria-label="Delete task"
      >
        <Trash2Icon size={20} />
      </button>
    </div>
  );
}

export default TaskItem;