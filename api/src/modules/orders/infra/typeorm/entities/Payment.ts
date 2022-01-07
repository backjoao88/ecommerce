import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('payments')
class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  amount: number;

  @Column()
  type: string;

  @Column()
  installments: number;

  @Column()
  status: string;

  @Column()
  card_id: string;

  @Column()
  order_id: string;

  @Column()
  shop_id: string;
}

export default Payment;
