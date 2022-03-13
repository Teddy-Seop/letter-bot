import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CrawlerModule } from './module/crawler';
import { SchedulerModule } from './module/scheduler';
import configuration from '@config/configuration';
import { ThecampWorkerModule } from '@module/worker/thecamp';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    CrawlerModule,
    SchedulerModule,
    ThecampWorkerModule,
  ],
})
export class AppModule {}
