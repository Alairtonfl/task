import { Task, markTaskAsDone } from "../api/taskApi";

interface TaskListProps {
  tasks: Task[];
  onTaskUpdated: (task: Task) => void;
}

export default function TaskList({ tasks, onTaskUpdated }: TaskListProps) {
  const handleDone = async (id: number) => {
    const updated = await markTaskAsDone(id);
    onTaskUpdated(updated);
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.done !== b.done) {
      return Number(a.done) - Number(b.done); 
    }
    return b.id - a.id;
  });

  return (
    <ul className="space-y-2">
      {sortedTasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center justify-between p-3 bg-white shadow rounded-lg border"
        >
          <span
            className={`text-lg ${
              task.done ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {task.title}
          </span>
          {!task.done && (
            <button
              onClick={() => handleDone(task.id)}
              className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              ✔
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
