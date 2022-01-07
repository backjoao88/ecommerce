import ICreateShippingDTO from '@modules/orders/dtos/ICreateShippingDTO';
import Shipping from '../typeorm/entities/Shipping';

interface IShippingRepository{
  findById(id: string): Promise<Shipping | undefined>;
  create(data: ICreateShippingDTO): Promise<Shipping>;
  save(data: Shipping): Promise<Shipping>;
  delete(id: string): Promise<Shipping | undefined> ;
}

export default IShippingRepository;
