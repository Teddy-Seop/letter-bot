import { CrawlerService } from '@module/crawler';
import { WorkerServiceAbstract } from '@module/worker';

export abstract class ControllerAbstract {
  constructor(
    protected readonly crawlerService: CrawlerService,
    protected readonly workerService: WorkerServiceAbstract<string, void>,
  ) {}

  public abstract send(): void;
}
