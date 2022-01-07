import ICreateCardDTO from '@modules/orders/dtos/ICreateCardDTO';
import Card from '../typeorm/entities/Card';

interface ICardRepository{
  findById(id: string): Promise<Card | undefined>;
  create(data: ICreateCardDTO): Promise<Card>;
  save(data: Card): Promise<Card>;
  delete(id: string): Promise<Card | undefined> ;
}

export default ICardRepository;
