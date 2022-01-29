import {
  Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';
import Category from './Category';
import Product from './Product';
import VariationShipping from './VariationShipping';

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

  @ManyToOne(() => Product, (product) => product.variations)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Column()
  shop_id: string;

  @Column()
  shippingVariation_id: string;

  @OneToOne(() => VariationShipping, { eager: true })
  @JoinColumn({ name: 'shippingVariation_id' })
  shippingVariation: VariationShipping;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Variation;
