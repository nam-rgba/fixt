import { Module } from '@nestjs/common';
import { LoggerModule as PinoLog } from 'nestjs-pino';

@Module({
  imports: [
    PinoLog.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
            colorize: true,
            levelFirst: true,
            translateTime: 'SYS:standard',
          },
        },
      },
    }),
  ],
})
export class LoggerModule {}
