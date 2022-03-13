import { CrawlerModule } from '@module/crawler';
import { ThecampWorkerModule } from '@module/worker/thecamp';
import { Module } from '@nestjs/common';
import { ThecampController } from './thecamp.controller';

@Module({
  imports: [ThecampWorkerModule, CrawlerModule],
  controllers: [ThecampController],
})
export class ThecampControllerModule {}
