import {
    Controller,
    Get,
    Post,
    Param,
    Body,
    Patch,
  } from '@nestjs/common';
import { TasksService } from './tasks.service';
  
  @Controller('tasks')
  export class TasksController {
    constructor(private mtasksService: TasksService) {}
  
    @Get()
    find() {
      return this.mtasksService.find();
    }
  }