import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThecampService } from './thecamp.service';

@Module({
  imports: [ConfigModule],
  exports: [ThecampService],
  providers: [ThecampService],
})
export class ThecampModule {}
