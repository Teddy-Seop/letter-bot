import { CrawlerService } from '@module/crawler';
import { DriverServiceAbstract } from '@module/driver/driver.service.abstract';
import { ParserService } from '@module/parser';

export abstract class WorkerServiceAbstract<
  DriverLoginResponseType,
  DriverSendResponseType,
> {
  constructor(
    protected readonly crawlerService: CrawlerService,
    protected readonly parserService: ParserService,
    protected readonly driverService: DriverServiceAbstract<
      DriverLoginResponseType,
      DriverSendResponseType
    >,
  ) {}

  public abstract execute(): Promise<void>;
}
