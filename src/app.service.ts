import { Injectable } from '@nestjs/common';

import { CrawlerService } from './module/crawler';

@Injectable()
export class AppService {
  constructor(private readonly crawlerService: CrawlerService) {}

  public async get(): Promise<any> {
    const items = await this.crawlerService.get();
    console.log(items);
  }
}
