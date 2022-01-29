import {
  Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';
import Category from './Category';
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

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany(() => Rating, (rating) => rating.product, { eager: true })
  ratings: Rating[]

  @OneToMany(() => Variation, (variation) => variation.product, { cascade: true, eager: true })
  variations: Variation[]

  @Column()
  shop_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
