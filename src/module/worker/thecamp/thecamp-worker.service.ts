import { Injectable } from '@nestjs/common';
import { CrawlerService } from '@module/crawler';
import { WorkerServiceAbstract } from '../worker.service.abstract';
import { ThecampDriverService } from '@module/driver/thecamp';
import { ParserService } from '@module/parser';

@Injectable()
export class ThecampWorkerService extends WorkerServiceAbstract<string, void> {
  constructor(
    protected readonly crawlerService: CrawlerService,
    protected readonly parserService: ParserService,
    protected readonly thecampDriverService: ThecampDriverService,
  ) {
    super(crawlerService, parserService, thecampDriverService);
  }

  public async execute(): Promise<void> {
    try {
      const contents = await this.crawlerService.get();
      const parsedContents = this.parserService.parse(contents);
      const cookie = await this.thecampDriverService.login();
      await this.thecampDriverService.send(cookie, contents);
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }
}
