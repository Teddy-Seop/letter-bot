import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThecampDriverService } from './thecamp.service';

@Module({
  imports: [ConfigModule],
  exports: [ThecampDriverService],
  providers: [ThecampDriverService],
})
export class ThecampDriverModule {}
