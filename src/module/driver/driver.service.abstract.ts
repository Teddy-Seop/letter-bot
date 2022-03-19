import { IContents } from '@module/crawler/type';
import { ConfigService } from '@nestjs/config';

export abstract class DriverServiceAbstract<
  DriverLoginResponseType,
  DriverSendResponseType,
> {
  constructor(protected readonly configService: ConfigService) {}

  public abstract login(): Promise<DriverLoginResponseType>;
  public abstract send(
    authentication: DriverLoginResponseType,
    contents: string[],
  ): Promise<DriverSendResponseType>;
}
