import { Module } from '@nestjs/common';
//import { MusicController } from './music.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tasks } from './entity/tasks.entity';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';


@Module({
  imports: [TypeOrmModule.forFeature([Tasks])],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}