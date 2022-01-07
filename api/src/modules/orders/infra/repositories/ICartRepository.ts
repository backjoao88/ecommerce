import ICreateCartDTO from '@modules/orders/dtos/ICreateCartDTO';
import Cart from '../typeorm/entities/Cart';

interface ICartRepository{
  findById(id: string): Promise<Cart | undefined>;
  create(data: ICreateCartDTO): Promise<Cart>;
  save(data: Cart): Promise<Cart>;
  delete(id: string): Promise<Cart | undefined> ;
}

export default ICartRepository;
