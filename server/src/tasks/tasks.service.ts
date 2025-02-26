import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tasks } from './entity/tasks.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks) private tasksRepo: Repository<Tasks>,
  ) {}

  async find() {}
    
}