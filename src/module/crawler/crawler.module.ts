import { Module } from '@nestjs/common';
import { CrawlerService } from './crawler.service';

@Module({
  exports: [CrawlerService],
})
export class CrawlerModule {}
