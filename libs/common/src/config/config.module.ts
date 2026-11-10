import { Module } from '@nestjs/common';
import { ConfigModule as NestCfg } from '@nestjs/config';
import z from 'zod';

@Module({
  imports: [
    NestCfg.forRoot({
      validationSchema: z.object({
        DB_HOST: z.string().nonempty(),
        DB_PORT: z.number().int().positive(),
        DB_USERNAME: z.string().nonempty(),
        DB_PASSWORD: z.string().nonempty(),
        DB_NAME: z.string().nonempty(),
      }),
    }),
  ],
})
export class ConfigModule {}
