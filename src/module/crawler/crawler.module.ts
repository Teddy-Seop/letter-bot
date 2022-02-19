import { Module } from '@nestjs/common';
import { CrawlerService } from './crawler.service';

@Module({
  exports: [CrawlerService],
  providers: [CrawlerService],
})
export class CrawlerModule {}
