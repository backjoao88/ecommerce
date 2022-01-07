import ICreateCartDTO from '@modules/orders/dtos/ICreateCartDTO';
import { uuid } from 'uuidv4';
import Cart from '../../typeorm/entities/Cart';
import ICartRepository from '../ICartRepository';

class FakeCartRepository implements ICartRepository {
  private carts: Cart[] = [];

  public async findById(id: string): Promise<Cart | undefined> {
    const filteredCart = this.carts.find((u) => u.id === id);
    return filteredCart;
  }

  public async create(userData: ICreateCartDTO): Promise<Cart> {
    const cart = new Cart();
    const newCart = Object.assign(cart, { id: uuid() }, userData);
    this.carts.push(newCart);
    return cart;
  }

  public async save(data: Cart): Promise<Cart> {
    const findIndex = this.carts.findIndex((d) => d.id === data.id);

    this.carts[findIndex] = data;

    return data;
  }

  public async delete(id: string): Promise<Cart> {
    const findIndex = this.carts.findIndex((d) => d.id === id);
    const newCart = Object.assign(this.carts[findIndex]);
    this.carts.splice(findIndex, 1);
    return newCart;
  }
}

export default FakeCartRepository;
