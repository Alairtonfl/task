import { Injectable, NotFoundException } from '@nestjs/common';
import { TasksRepository } from './tasks.repository';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(private readonly repository: TasksRepository) {}

  findAll(): Task[] {
    return this.repository.findAll();
  }

  create(dto: CreateTaskDto): Task {
    return this.repository.create(dto);
  }

  markAsDone(id: number): Task {
    const task = this.repository.findOne(id);
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    task.done = true;
    return this.repository.update(task);
  }
}
