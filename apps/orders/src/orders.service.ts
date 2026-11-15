import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './orders/dto/create-order.dto.js';
import { UpdateOrderDto } from './orders/dto/update-order.dto.js';
import { OrderRepository } from './order.repository.js';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepository: OrderRepository) {}

  create(createOrderDto: CreateOrderDto) {
    return this.orderRepository.create(createOrderDto);
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
