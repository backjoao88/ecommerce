import { getRepository, Repository, Not } from 'typeorm';

import ICreateCardDTO from '@modules/orders/dtos/ICreateCardDTO';
import Card from '../entities/Card';
import ICardRepository from '../../repositories/ICardRepository';

class CardRepository implements ICardRepository {
  private ormRepository: Repository<Card>;

  constructor() {
    this.ormRepository = getRepository(Card);
  }

  public async delete(id: string): Promise<Card | undefined> {
    const card = this.findById(id);
    await this.ormRepository.delete(id);
    return card;
  }

  public async findById(id: string): Promise<Card | undefined> {
    const card = await this.ormRepository.findOne(id);
    return card;
  }

  public async create(userData: ICreateCardDTO): Promise<Card> {
    const card = await this.ormRepository.create(userData);

    await this.ormRepository.save(card);

    return card;
  }

  public async save(card: Card): Promise<Card> {
    return this.ormRepository.save(card);
  }
}

export default CardRepository;
