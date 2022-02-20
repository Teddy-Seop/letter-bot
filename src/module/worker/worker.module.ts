import { Module } from '@nestjs/common';

import { ThecampModule } from '@module/thecamp';
import { CrawlerModule } from '@module/crawler';

import { WorkerService } from './worker.service';

@Module({
  imports: [CrawlerModule, ThecampModule],
  exports: [WorkerService],
  providers: [WorkerService],
})
export class WorkerModule {}
