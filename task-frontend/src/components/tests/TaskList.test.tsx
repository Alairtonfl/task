import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskList from "../TaskList";
import { Task, markTaskAsDone } from "../../api/taskApi";

jest.mock("../../api/taskApi", () => ({
  markTaskAsDone: jest.fn(async (id: number) => ({ id, title: "Teste", done: true })),
}));

describe("TaskList", () => {
  it("deve renderizar tasks ordenadas", () => {
    const tasks: Task[] = [
      { id: 1, title: "Estudar", done: true },
      { id: 3, title: "Trabalhar", done: true },
      { id: 2, title: "Treinar", done: false },
      { id: 4, title: "Ler", done: false },
    ];

    render(<TaskList tasks={tasks} onTaskUpdated={() => {}} />);

    const items = screen.getAllByRole("listitem");
    const texts = items.map((item) => item.textContent);

    expect(texts).toEqual([
      expect.stringContaining("Ler"),
      expect.stringContaining("Treinar"),
      expect.stringContaining("Trabalhar"),
      expect.stringContaining("Estudar"),
    ]);
  });

  it("deve chamar onTaskUpdated ao clicar no botão ✔", async () => {
    const tasks: Task[] = [{ id: 1, title: "Estudar", done: false }];
    const mockUpdate = jest.fn();

    render(<TaskList tasks={tasks} onTaskUpdated={mockUpdate} />);
    const button = screen.getByRole("button", { name: "✔" });

    await userEvent.click(button);

    expect(mockUpdate).toHaveBeenCalled();
  });
});
