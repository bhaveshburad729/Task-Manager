const API_URL = "http://127.0.0.1:8000";

export const getTasks = () =>
  fetch(`${API_URL}/tasks`);

export const addTask = (task) =>
  fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

export const toggleTask = (id) =>
  fetch(`${API_URL}/tasks/${id}`, { method: "PUT" });

export const deleteTask = (id) =>
  fetch(`${API_URL}/tasks/${id}`, { method: "DELETE" });
