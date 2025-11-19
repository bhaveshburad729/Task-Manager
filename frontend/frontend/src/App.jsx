import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    // Call FastAPI backend
    fetch("http://127.0.0.1:8000/")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error fetching from backend:", error);
        setMessage("Could not connect to backend 😢");
      });
  }, []); // empty dependency array = run once when component mounts

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Task Manager (Project 1)</h1>
      <p>Backend says:</p>
      <pre
        style={{
          background: "#000000ff",
          padding: "1rem",
          borderRadius: "8px",
        }}
      >
        {message}
        
      </pre>
    </div>
  );
}

export default App;
