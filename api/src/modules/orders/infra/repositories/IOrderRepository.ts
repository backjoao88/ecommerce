import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';
import Order from '../typeorm/entities/Order';

interface IOrderRepository{
  findById(id: string): Promise<Order | undefined>;
  create(data: ICreateOrderDTO): Promise<Order>;
  save(data: Order): Promise<Order>;
  delete(id: string): Promise<Order | undefined> ;
}

export default IOrderRepository;
