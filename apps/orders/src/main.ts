import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './orders.module.js';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.useLogger(app.get(Logger));

  await app.listen(process.env.port ?? 3000);
}
await bootstrap();
