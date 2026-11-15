import { BaseRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { Order } from './orders/entities/order.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrderRepository extends BaseRepository<Order> {
  protected readonly logger: Logger = new Logger(OrderRepository.name);

  constructor(
    @InjectRepository(Order)
    private readonly repository: Repository<Order>,
  ) {
    super(repository);
  }
}
