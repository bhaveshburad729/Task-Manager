# Task Manager

[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/bhaveshburad729/Task-Manager)

A full-stack task management application built with a FastAPI backend and a React frontend. It allows users to create, view, update, and delete tasks through a clean and responsive user interface.

## Tech Stack

-   **Backend**:
    -   [FastAPI](https://fastapi.tiangolo.com/): High-performance web framework for building APIs.
    -   [SQLAlchemy](https://www.sqlalchemy.org/): SQL toolkit and Object Relational Mapper for Python.
    -   [PostgreSQL](https://www.postgresql.org/): The database used to store task data.
    -   [Uvicorn](https://www.uvicorn.org/): ASGI server for running the FastAPI application.

-   **Frontend**:
    -   [React](https://react.dev/): A JavaScript library for building user interfaces.
    -   [Vite](https://vitejs.dev/): A modern front-end build tool.
    -   [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
    -   [Lucide React](https://lucide.dev/): A library for simple and beautiful icons.

## Features

-   **Create Tasks**: Add new tasks with a title.
-   **View Tasks**: Display a list of all current tasks.
-   **Toggle Completion**: Mark tasks as complete or incomplete with a single click.
-   **Delete Tasks**: Remove tasks from the list.
-   **Task Statistics**: View a live count of total and completed tasks.
-   **Responsive UI**: A clean and modern interface that works on both desktop and mobile devices.

## Project Structure

The repository is organized into two main directories:

-   `📁 backend`: Contains the FastAPI application, including API endpoints, database models, and configuration.
-   `📁 frontend`: Contains the React client application, including components, services, and styles.

## Installation and Setup

To get this project running locally, follow the steps below.

### Prerequisites

-   [Python 3.8+](https://www.python.org/downloads/)
-   [Node.js and npm](https://nodejs.org/en)
-   [PostgreSQL](https://www.postgresql.org/download/)

### Backend Setup

1.  **Navigate to the backend directory:**
    ```sh
    cd backend/app
    ```

2.  **Create and activate a virtual environment:**
    ```sh
    # For macOS/Linux
    python3 -m venv venv
    source venv/bin/activate

    # For Windows
    python -m venv venv
    .\venv\Scripts\activate
    ```

3.  **Install the required Python packages:**
    ```sh
    pip install -r requirements.txt
    ```
    *(Note: The `requirements.txt` should include `fastapi`, `uvicorn`, `sqlalchemy`, `psycopg2-binary`, and `python-dotenv`.)*

4.  **Set up the database connection:**
    -   Create a `.env` file inside the `backend/app` directory.
    -   Add your PostgreSQL connection string to the file:
        ```
        DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"
        ```

5.  **Run the backend server:**
    ```sh
    uvicorn main:app --reload
    ```
    The backend API will be available at `http://localhost:8000`.

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```sh
    cd frontend
    ```

2.  **Install the required npm packages:**
    ```sh
    npm install
    ```

3.  **Run the frontend development server:**
    ```sh
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

## API Endpoints

The backend provides the following RESTful API endpoints for managing tasks.

| Method | Endpoint             | Description                                                   |
| :----- | :------------------- | :------------------------------------------------------------ |
| `GET`    | `/tasks`             | Retrieves a list of all tasks.                                |
| `POST`   | `/tasks`             | Creates a new task. Body: `{ "title": "Your task title" }`      |
| `PUT`    | `/tasks/{task_id}`   | Toggles the `completed` status of a specific task.            |
| `DELETE` | `/tasks/{task_id}`   | Deletes a specific task.                                      |