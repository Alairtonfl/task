import { useEffect, useState } from "react";
import { Task, getTasks } from "../api/taskApi";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
    setFilteredTasks(data);
  };

  const handleTaskCreated = (task: Task) => {
    setTasks((prev) => [...prev, task]);
    setFilteredTasks((prev) => [...prev, task]);
  };

  const handleTaskUpdated = (updated: Task) => {
    setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
    setFilteredTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  };

  const handleSearchChange = (query: string) => {
    const filtered = tasks.filter((t) =>
      t.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTasks(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
          📝 Lista de tarefas
        </h1>
        <TaskForm onTaskCreated={handleTaskCreated} onSearchChange={handleSearchChange} />
        <TaskList tasks={filteredTasks} onTaskUpdated={handleTaskUpdated} />
      </div>
    </div>
  );
}
