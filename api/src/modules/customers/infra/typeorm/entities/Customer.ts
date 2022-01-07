import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

@Entity('customers')
class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  birth_date: Date;

  @Column()
  cpf: string;

  @Column()
  inactive: boolean;

  @Column()
  fone: string;

  @Column()
  user_id: string;

  @Column()
  shop_id: string;

  @Column()
  address_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Customer;
