import { NotFoundException } from '@nestjs/common';
import { TasksService } from '../tasks.service';
import { TasksRepository } from '../tasks.repository';

describe('TasksService', () => {
  let service: TasksService;
  let repository: TasksRepository;

  beforeEach(() => {
    repository = new TasksRepository();
    service = new TasksService(repository);
  });

  it('should create a new task', () => {
    const task = service.create({ title: 'Tarefa Node' });
    expect(task).toHaveProperty('id');
    expect(task.title).toBe('Tarefa Node');
    expect(task.done).toBe(false);
  });

  it('should return all tasks', () => {
    service.create({ title: 'Task 1' });
    service.create({ title: 'Task 2' });

    const tasks = service.findAll();
    expect(tasks.length).toBe(2);
  });

  it('should mark a task as done', () => {
    const task = service.create({ title: 'Tarefa Node' });
    const doneTask = service.markAsDone(task.id);

    expect(doneTask.done).toBe(true);
  });

  it('should throw error when marking non-existent task as done', () => {
    expect(() => service.markAsDone(999)).toThrow(NotFoundException);
  });
});
