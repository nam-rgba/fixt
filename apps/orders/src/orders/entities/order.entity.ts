import { CoreEntity } from '@app/common';
import { Entity, OneToMany } from 'typeorm';
import * as typeorm from 'typeorm';
import { OrderDetail } from '../../order-details/entities/order-detail.entity.js';

@Entity()
export class Order extends CoreEntity {
  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order)
  orderDetails: typeorm.Relation<OrderDetail[]>;
}
