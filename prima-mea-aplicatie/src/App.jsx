import { useState, useEffect } from "react";

const initialTasks = [
  { id: 1, title: "Creează proiectul React", completed: true, dueDate: "" },
  { id: 2, title: "Învață JSX", completed: false, dueDate: "" },
  { id: 3, title: "Construiește prima componentă", completed: false, dueDate: "" }
];

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={task.completed ? "task task--completed" : "task"}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <div className="task-details">
          <span>{task.title}</span>
          {task.dueDate && <small className="task-date">⏳ {task.dueDate}</small>}
        </div>
      </label>
      <button type="button" onClick={() => onDelete(task.id)}>
        Șterge
      </button>
    </li>
  );
}

function App() {
  // 4. Salvare în localStorage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("glow-studio-tasks");
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newDueDate, setNewDueDate] = useState(""); // 5. Dată limită
  const [filter, setFilter] = useState("all"); // 1. Filtre

  // Actualizăm localStorage ori de câte ori se modifică tasks
  useEffect(() => {
    localStorage.setItem("glow-studio-tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleSubmit(event) {
    event.preventDefault();
    const title = newTaskTitle.trim();
    if (title === "") return;

    const newTask = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      dueDate: newDueDate
    };

    setTasks((currentTasks) => [...currentTasks, newTask]);
    setNewTaskTitle("");
    setNewDueDate("");
  }

  function handleToggle(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleDelete(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  }

  // 2. Șterge activitățile finalizate
  function clearCompleted() {
    setTasks((currentTasks) => currentTasks.filter((task) => !task.completed));
  }

  const completedCount = tasks.filter((task) => task.completed).length;
  const remainingCount = tasks.length - completedCount; // 3. Numărul activităților rămase

  // Logica pentru filtrare
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <main className="app">
      <header className="app__header">
        <p className="app__eyebrow">ORGANIZARE PERSONALĂ</p>
        <h1>Lista mea de activități</h1>
        <p>Un pas mic, apoi încă unul.</p>
      </header>

      <form className="task-form" onSubmit={handleSubmit}>
        <label htmlFor="task-title">Activitate nouă</label>
        <div className="task-form__controls">
          <input
            id="task-title"
            type="text"
            value={newTaskTitle}
            onChange={(event) => setNewTaskTitle(event.target.value)}
            placeholder="De exemplu: repetă JSX"
          />
          <input
            type="date"
            value={newDueDate}
            onChange={(event) => setNewDueDate(event.target.value)}
            className="date-input"
          />
          <button type="submit">Adaugă</button>
        </div>
      </form>

      <section className="task-section" aria-labelledby="task-heading">
        <div className="task-section__heading">
          <h2 id="task-heading">Activități</h2>
          <div className="task-stats">
            <p><strong>{remainingCount}</strong> de făcut</p>
            <p>{completedCount} finalizate</p>
          </div>
        </div>

        {/* Butoane pentru filtre */}
        <div className="filters">
          <button type="button" className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>Toate</button>
          <button type="button" className={filter === "active" ? "active" : ""} onClick={() => setFilter("active")}>Active</button>
          <button type="button" className={filter === "completed" ? "active" : ""} onClick={() => setFilter("completed")}>Finalizate</button>
        </div>

        {filteredTasks.length === 0 ? (
          <p className="empty-message">Nu există activități aici.</p>
        ) : (
          <ul className="task-list">
            {filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={handleToggle}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        )}

        {/* Buton ștergere finalizate */}
        {completedCount > 0 && (
          <button type="button" className="clear-completed-btn" onClick={clearCompleted}>
            Șterge activitățile finalizate
          </button>
        )}
      </section>
    </main>
  );
}

export default App;