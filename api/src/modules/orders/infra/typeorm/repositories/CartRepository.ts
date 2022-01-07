import ICreateCartDTO from '@modules/orders/dtos/ICreateCartDTO';
import { Repository, getRepository } from 'typeorm';
import ICartRepository from '../../repositories/ICartRepository';
import Cart from '../entities/Cart';

class CartRepository implements ICartRepository {
  private ormRepository: Repository<Cart>;

  constructor() {
    this.ormRepository = getRepository(Cart);
  }

  public async delete(id: string): Promise<Cart | undefined> {
    const cart = this.findById(id);
    await this.ormRepository.delete(id);
    return cart;
  }

  public async findById(id: string): Promise<Cart | undefined> {
    const cart = await this.ormRepository.findOne(id);
    return cart;
  }

  public async create(userData: ICreateCartDTO): Promise<Cart> {
    const cart = await this.ormRepository.create(userData);

    await this.ormRepository.save(cart);

    return cart;
  }

  public async save(cart: Cart): Promise<Cart> {
    return this.ormRepository.save(cart);
  }
}

export default CartRepository;
