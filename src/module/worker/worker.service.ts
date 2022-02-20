import { Injectable } from '@nestjs/common';
import { CrawlerService } from '@module/crawler';
import { ThecampService } from '@module/thecamp';

@Injectable()
export class WorkerService {
  constructor(
    private readonly crawlerService: CrawlerService,
    private readonly thecampService: ThecampService,
  ) {}

  public async execute(): Promise<void> {
    // const contents = await this.crawlerService.get();
    await this.thecampService.login();
  }
}
