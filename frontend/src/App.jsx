import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]); // list of tasks
  const [loading, setLoading] = useState(true); // loading state
  const [newTask, setNewTask] = useState(""); // input value for new task

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/tasks");
      const data = await response.json();
      setTasks(data); // save tasks in state
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  // Create a new task
  const addTask = async (e) => {
    e.preventDefault(); // prevent page reload

    if (!newTask.trim()) return alert("Task cannot be empty!");

    try {
      await fetch("http://127.0.0.1:8000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTask }),
      });

      setNewTask(""); // clear input box
      fetchTasks(); // refresh task list
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const toggleTask = async (taskId) => {
    try {
      await fetch(`http://127.0.0.1:8000/tasks/${taskId}`, {
        method: "PUT",
      });

      fetchTasks(); // refresh list
    } catch (error) {
      console.error("Error toggling task:", error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await fetch(`http://127.0.0.1:8000/tasks/${taskId}`, {
        method: "DELETE",
      });

      fetchTasks(); // refresh list
    } catch (error) {
      console.error("Error Delteing task:", error);
    }
  };

  // Load tasks when app starts
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Task Manager</h1>

      {/* Add New Task Form */}
      <form onSubmit={addTask} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
          style={{ padding: "8px", width: "250px" }}
        />
        <button
          type="submit"
          style={{ marginLeft: "10px", padding: "8px 12px" }}
        >
          Add Task
        </button>
      </form>

      {/* Task List */}
      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} style={{ marginBottom: "8px" }}>
              {task.title} — {task.completed ? "✅ Done" : "❌ Not Done"}
              <button
                onClick={() => toggleTask(task.id)}
                style={{ marginLeft: "10px", padding: "4px 8px" }}
              >
                Toggle
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                style={{
                  marginLeft: "10px",
                  padding: "4px 8px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
