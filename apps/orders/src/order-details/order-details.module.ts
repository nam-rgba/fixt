import { Module } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service.js';
import { OrderDetailsController } from './order-details.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetail } from './entities/order-detail.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDetail])],
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService],
})
export class OrderDetailsModule {}
