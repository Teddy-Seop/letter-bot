import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrawlerModule } from './module/crawler';
import { SchedulerModule } from './module/scheduler';
import configuration from '@config/configuration';
import { WorkerModule } from '@module/worker';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    CrawlerModule,
    SchedulerModule,
    WorkerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
