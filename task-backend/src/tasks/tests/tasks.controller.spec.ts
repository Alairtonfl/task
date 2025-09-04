import { TasksController } from '../tasks.controller';
import { TasksService } from '../tasks.service';
import { TasksRepository } from '../tasks.repository';

describe('TasksController', () => {
  let controller: TasksController;
  let service: TasksService;

  beforeEach(() => {
    const repository = new TasksRepository();
    service = new TasksService(repository);
    controller = new TasksController(service);
  });

  it('should create a task', () => {
    const task = controller.create({ title: 'Teste' });
    expect(task).toHaveProperty('id');
    expect(task.title).toBe('Teste');
  });

  it('should return all tasks', () => {
    controller.create({ title: 'Task A' });
    controller.create({ title: 'Task B' });

    const tasks = controller.findAll();
    expect(tasks.length).toBe(2);
  });

  it('should mark a task as done', () => {
    const task = controller.create({ title: 'Tarefas' });
    const updated = controller.markAsDone(task.id);

    expect(updated.done).toBe(true);
  });
});
