import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('shops')
class Shop {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column()
  fone: string;

  @Column()
  address_id: string;

  @Column()
  email: string;
}

export default Shop;
