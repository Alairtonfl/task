import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksRepository {
  private tasks: Task[] = [];
  private idCounter = 1;

  create(dto: CreateTaskDto): Task {
    const task: Task = {
      id: this.idCounter++,
      title: dto.title,
      done: false,
    };
    this.tasks.push(task);
    return task;
  }

  findAll(): Task[] {
    return this.tasks.sort((a, b) => {
      if (a.done !== b.done) {
        return Number(a.done) - Number(b.done);
      }

      return b.id - a.id;
    });
  }

  findOne(id: number): Task | undefined {
    return this.tasks.find((t) => t.id === id);
  }

  update(task: Task): Task {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
    return task;
  }
}
