import {
  Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn,
} from 'typeorm';

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

  @Column()
  shop_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Rating;
