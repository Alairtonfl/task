import { useState } from "react";
import { createTask, Task } from "../api/taskApi";

interface TaskFormProps {
  onTaskCreated: (task: Task) => void;
  onSearchChange: (query: string) => void;
}

export default function TaskForm({ onTaskCreated, onSearchChange }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTask = await createTask(title);
    onTaskCreated(newTask);
    setTitle("");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  return (
    <div className="flex flex-col gap-3 mb-4">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Criar nova tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          +
        </button>
      </form>

      <input
        type="text"
        placeholder="Buscar tarefas"
        value={searchQuery}
        onChange={handleSearchChange}
        className="flex-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}
