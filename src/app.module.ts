import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrawlerModule } from './module/crawler';
import { SchedulerModule } from './module/scheduler';

@Module({
  imports: [CrawlerModule, SchedulerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
