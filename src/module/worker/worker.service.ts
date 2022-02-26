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
    try {
      const contents = await this.crawlerService.get();
      const cookie = await this.thecampService.login();
      await this.thecampService.send(cookie, contents);
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }
}
