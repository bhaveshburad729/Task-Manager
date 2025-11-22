import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { getTasks, addTask, toggleTask, deleteTask } from "../services/api";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadTasks = async () => {
    setLoading(true);
    try {
      const res = await getTasks();
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.error("Failed to load tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAddTask = async (title) => {
    await addTask({ title });
    loadTasks();
  };

  const handleToggleTask = async (id) => {
    await toggleTask(id);
    loadTasks();
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const completedCount = tasks.filter((task) => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-2">
            Task Manager
          </h1>
          <p className="text-slate-600">Stay organized and productive</p>
        </div>

        {/* Task Form */}
        <TaskForm onAdd={handleAddTask} />

        {/* Stats */}
        {totalCount > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
              <p className="text-slate-600 text-sm font-medium">Total Tasks</p>
              <p className="text-3xl font-bold text-slate-900">{totalCount}</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
              <p className="text-slate-600 text-sm font-medium">Completed</p>
              <p className="text-3xl font-bold text-green-600">{completedCount}</p>
            </div>
          </div>
        )}

        {/* Task List */}
        <div className="bg-white rounded-lg shadow-md border border-slate-200">
          {loading ? (
            <div className="p-8 text-center text-slate-500">Loading tasks...</div>
          ) : tasks.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-slate-500 text-lg">No tasks yet. Add one to get started!</p>
            </div>
          ) : (
            <TaskList
              tasks={tasks}
              onToggle={handleToggleTask}
              onDelete={handleDeleteTask}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;