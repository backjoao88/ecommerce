import {
  Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn,
} from 'typeorm';
import Product from './Product';

@Entity('ratings')
class Rating {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  text: string;

  @Column()
  score: number;

  @Column()
  product_id: string;

  @ManyToOne(() => Product, (products) => products.ratings)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Column()
  shop_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Rating;
