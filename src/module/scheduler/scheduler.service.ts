import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class SchedulerService {
  @Cron('40 20 15 * * *')
  handle() {
    console.log('Called');
  }
}
