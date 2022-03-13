import { CrawlerService } from '@module/crawler';
import { WorkerServiceAbstract } from '@module/worker';

export abstract class ControllerAbstract<LoginResponseType, SendResponseType> {
  constructor(
    protected readonly crawlerService: CrawlerService,
    protected readonly workerService: WorkerServiceAbstract<
      LoginResponseType,
      SendResponseType
    >,
  ) {}

  public abstract send(): void;
}
