import {
  BaseEntity,
  BeforeInsert,
  BeforeRemove,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import dayjs from 'dayjs';

@Entity()
export abstract class CoreEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', unsigned: true })
  createdAt!: number;
  @BeforeInsert()
  setCreatedAt() {
    this.createdAt = dayjs().unix();
    this.updatedAt = dayjs().unix();
  }

  @Column({
    type: 'int',
    unsigned: true,
  })
  updatedAt!: number;
  @BeforeUpdate()
  setUpdatedAt() {
    this.updatedAt = dayjs().unix();
  }

  @Column({ type: 'boolean', default: false })
  isDeleted: boolean;

  @Column({ type: 'int', nullable: true })
  deletedAt?: number;
  @BeforeRemove()
  setDeletedAt() {
    this.deletedAt = dayjs().unix();
  }
}
