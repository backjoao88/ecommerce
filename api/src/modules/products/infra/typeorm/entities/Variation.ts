import {
  Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';

@Entity('variations')
class Variation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  price_promotion: number;

  @Column()
  quantity: number;

  @Column()
  blocked_quantity: number;

  @Column()
  product_id: string;

  @Column()
  shop_id: string;

  @Column()
  shipping_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Variation;
