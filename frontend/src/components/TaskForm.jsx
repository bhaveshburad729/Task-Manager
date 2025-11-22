import { useState } from "react";
import { PlusIcon } from "lucide-react";

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    setIsSubmitting(true);
    try {
      await onAdd(title);
      setTitle("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={isSubmitting}
          className="flex-1 px-4 py-3 bg-white border-2 border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isSubmitting || !title.trim()}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex items-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg active:scale-95"
        >
          <PlusIcon size={20} />
          <span className="hidden sm:inline">Add</span>
        </button>
      </div>
    </form>
  );
}

export default TaskForm;