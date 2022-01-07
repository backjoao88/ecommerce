import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cards')

class Card {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  areaCode: string;

  @Column()
  fone: string;

  @Column()
  birthDate: Date;

  @Column()
  token: string;

  @Column()
  cpf: string;
}

export default Card;
