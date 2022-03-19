import { Controller, Post } from '@nestjs/common';

import { ControllerAbstract } from '@controller/controller.abstract';
import { CrawlerService } from '@module/crawler';
import { ThecampWorkerService } from '@module/worker/thecamp';
import { IThecampCookie } from '@module/driver/thecamp/interface';

@Controller('thecamp')
export class ThecampController extends ControllerAbstract<
  IThecampCookie,
  void
> {
  constructor(
    protected readonly crawlerService: CrawlerService,
    protected readonly workerService: ThecampWorkerService,
  ) {
    super(crawlerService, workerService);
  }

  @Post()
  public async send(): Promise<void> {
    return this.workerService.execute();
  }
}
