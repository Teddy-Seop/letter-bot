import { CrawlerService } from '@module/crawler';
import { DriverServiceAbstract } from '@module/driver/driver.service.abstract';

export abstract class WorkerServiceAbstract<
  DriverLoginResponseType,
  DriverSendResponseType,
> {
  constructor(
    protected readonly crawlerService: CrawlerService,
    protected readonly driverService: DriverServiceAbstract<
      DriverLoginResponseType,
      DriverSendResponseType
    >,
  ) {}

  public abstract execute(): Promise<void>;
}
