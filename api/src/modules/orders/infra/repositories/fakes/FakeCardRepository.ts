import ICreateCardDTO from '@modules/orders/dtos/ICreateCardDTO';
import { uuid } from 'uuidv4';
import Card from '../../typeorm/entities/Card';
import ICardRepository from '../ICardRepository';

class FakeCardRepository implements ICardRepository {
  private cards: Card[] = [];

  public async findById(id: string): Promise<Card | undefined> {
    const filteredCard = this.cards.find((u) => u.id === id);
    return filteredCard;
  }

  public async create(userData: ICreateCardDTO): Promise<Card> {
    const card = new Card();
    const newCard = Object.assign(card, { id: uuid() }, userData);
    this.cards.push(newCard);
    return card;
  }

  public async save(data: Card): Promise<Card> {
    const findIndex = this.cards.findIndex((d) => d.id === data.id);
    this.cards[findIndex] = data;
    return data;
  }

  public async delete(id: string): Promise<Card> {
    const findIndex = this.cards.findIndex((d) => d.id === id);
    const newCard = Object.assign(this.cards[findIndex]);
    this.cards.splice(findIndex, 1);
    return newCard;
  }
}

export default FakeCardRepository;
