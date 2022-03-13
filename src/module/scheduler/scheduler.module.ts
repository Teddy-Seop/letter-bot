import { Module } from '@nestjs/common';

import { ScheduleModule } from '@nestjs/schedule';
// import { WorkerModule } from '@module/worker';
import { SchedulerService } from './scheduler.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  exports: [SchedulerService],
  providers: [SchedulerService],
})
export class SchedulerModule {}
