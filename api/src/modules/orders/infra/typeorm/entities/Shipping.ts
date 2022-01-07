import Address from '@modules/addresses/infra/typeorm/entities/Address';
import {
  Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';

import Order from './Order';

@Entity('shippings')
class Shipping {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  status: string;

  @Column()
  tracking_code: string;

  @Column()
  type: string;

  @Column()
  cost: number;

  @Column()
  deadline: number;

  @Column()
  address_id: string;

  // @Column()
  // address: Address;

  @Column()
  order_id: string;

  // @Column()
  // order: Order;

  @Column()
  shop_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Shipping;
