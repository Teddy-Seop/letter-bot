import { WorkerService } from '@module/worker';
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class SchedulerService {
  constructor(private readonly workerService: WorkerService) {}

  @Cron('40 20 15 * * *')
  private async handle(): Promise<void> {
    await this.workerService.execute();
  }
}
