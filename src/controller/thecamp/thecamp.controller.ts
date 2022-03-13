import { Controller } from '@nestjs/common';

import { ControllerAbstract } from '@controller/controller.abstract';
import { CrawlerService } from '@module/crawler';
import { ThecampWorkerService } from '@module/worker/thecamp';

@Controller()
export class ThecampController extends ControllerAbstract<string, void> {
  constructor(
    protected readonly crawlerService: CrawlerService,
    protected readonly workerService: ThecampWorkerService,
  ) {
    super(crawlerService, workerService);
  }

  public async send(): Promise<void> {
    await this.workerService.execute();
  }
}
