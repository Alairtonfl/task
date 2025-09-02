import { Module } from '@nestjs/common';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { TasksRepository } from './tasks/tasks.repository';

@Module({
  imports: [],
  controllers: [TasksController],
  providers: [TasksService, TasksRepository],
})
export class AppModule {}
