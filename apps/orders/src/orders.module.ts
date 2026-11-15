import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service.js';
import { OrdersController } from './orders.controller.js';
import { DatabaseModule } from '@app/common';
import { OrderDetailsModule } from './order-details/order-details.module.js';
import { OrderRepository } from './order.repository.js';

@Module({
  imports: [DatabaseModule, OrderDetailsModule],
  controllers: [OrdersController],
  providers: [OrdersService, OrderRepository],
})
export class OrdersModule {}
