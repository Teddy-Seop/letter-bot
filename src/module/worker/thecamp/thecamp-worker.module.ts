import { Module } from '@nestjs/common';

import { ThecampDriverModule } from '@module/driver/thecamp';
import { CrawlerModule } from '@module/crawler';
import { ParserModule } from '@module/parser';

import { ThecampWorkerService } from './thecamp-worker.service';

@Module({
  imports: [CrawlerModule, ParserModule, ThecampDriverModule],
  exports: [ThecampWorkerService],
  providers: [ThecampWorkerService],
})
export class ThecampWorkerModule {}
