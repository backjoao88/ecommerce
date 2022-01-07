import {
  Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';
import Rating from './Rating';
import Variation from './Variation';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  available: boolean;

  @Column()
  price: number;

  @Column()
  price_promotion: number;

  @Column()
  sku: string;

  @Column()
  category_id: string;

  @Column()
  shop_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
