import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import {
  Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';
import Cart from './Cart';
import Payment from './Payment';

@Entity('orders')
class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: string;

  @Column()
  total_price: number;

  @Column()
  total_price_promotion: number;

  @Column()
  cancelled: boolean;

  @Column()
  customer_id: string;

  @Column()
  payment_id: string;

  @Column()
  shipping_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export default Order;
