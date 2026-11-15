import { CoreEntity } from '@app/common';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Order } from '../../orders/entities/order.entity.js';

@Entity('order_details')
export class OrderDetail extends CoreEntity {
  @Column()
  orderId: number;

  @Column()
  productId: number;

  @ManyToOne(() => Order, (order) => order.id)
  order: Order;
}
