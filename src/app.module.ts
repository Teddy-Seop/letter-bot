import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CrawlerModule } from './module/crawler';
import { SchedulerModule } from './module/scheduler';
import configuration from '@config/configuration';
import { ThecampControllerModule } from '@controller/thecamp';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration] }),
    CrawlerModule,
    SchedulerModule,
    ThecampControllerModule,
  ],
})
export class AppModule {}
