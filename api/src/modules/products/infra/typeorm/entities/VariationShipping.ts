import {
  Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';

@Entity('variation_shippings')
class VariationShipping {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  height_cm: number;

  @Column()
  width_cm: number;

  @Column()
  depth_cm: number;

  @Column()
  weight_kg: number;

  @Column()
  free_shipping: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default VariationShipping;
