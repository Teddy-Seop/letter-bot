import { Module } from '@nestjs/common';

import { ThecampDriverModule } from '@module/driver/thecamp';
import { CrawlerModule } from '@module/crawler';

import { ThecampWorkerService } from './thecamp-worker.service';

@Module({
  imports: [CrawlerModule, ThecampDriverModule],
  exports: [ThecampWorkerService],
  providers: [ThecampWorkerService],
})
export class ThecampWorkerModule {}
