import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tasks } from './entity/tasks.entity';
import { TasksDto } from './dto/tasks.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks) private tasksRepo: Repository<Tasks>,
  ) {}

  async find_tasks() {
    return await this.tasksRepo.find()
  }

  async create_todo(tasksDto:TasksDto){
    const task = await this.tasksRepo.create(tasksDto);
    const exsted_task = task.title;

    if (exsted_task) {
      return 'This task with this title already existed';
    }

    return await this.tasksRepo.save(task);
  }

  async update_todo(task_id: number, status:string) {
    const task = await this.tasksRepo.findOne({
      where: { id : task_id },
    });

    if (!task) {
      throw new NotFoundException('This task is not existed');
    }

    task.status = status;
    
    return await this.tasksRepo.save(task);
  }

  async remove_todo(task_id: number) {
    const message = await this.tasksRepo.findOne({
      where: { id : task_id },
    });

    if (!message) {
      throw new NotFoundException();
    }

     return this.tasksRepo.remove(message);
  }
}