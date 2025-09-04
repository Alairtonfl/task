import axios from "axios";

const API_URL = "http://localhost:3000/tasks";

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

export const getTasks = async (): Promise<Task[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTask = async (title: string): Promise<Task> => {
  const response = await axios.post(API_URL, { title });
  return response.data;
};

export const markTaskAsDone = async (id: number): Promise<Task> => {
  const response = await axios.patch(`${API_URL}/${id}/done`);
  return response.data;
};
