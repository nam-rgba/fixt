import { Module } from '@nestjs/common';
import { ConfigModule as NestCfg } from '@nestjs/config';

@Module({
  imports: [NestCfg.forRoot()],
})
export class ConfigModule {}
