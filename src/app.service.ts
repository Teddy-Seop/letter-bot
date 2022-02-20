import { WorkerService } from '@module/worker';
import { Injectable } from '@nestjs/common';

import { CrawlerService } from './module/crawler';

@Injectable()
export class AppService {
  constructor(
    private readonly crawlerService: CrawlerService,
    private readonly workerService: WorkerService,
  ) {}

  public async get(): Promise<any> {
    // const items = await this.crawlerService.get();
    // console.log(items);
    await this.workerService.execute();
  }
}
