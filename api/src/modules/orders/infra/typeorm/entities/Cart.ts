import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('carts')
class Cart {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  quantity: number;

  @Column()
  price_unitary: number;

  @Column()
  variation_id: string;

  @Column()
  product_id: string;
}

export default Cart;
