import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);       // list of tasks
  const [loading, setLoading] = useState(true); // loading state

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/tasks");
      const data = await response.json();
      setTasks(data);  // save tasks in state
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false); // stop loading animation
    }
  };

  // Run fetchTasks ONE TIME when page loads
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Task Manager</h1>

      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title} — {task.completed ? "✅ Done" : "❌ Not Done"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
