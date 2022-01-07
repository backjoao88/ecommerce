import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';
import { Repository, getRepository } from 'typeorm';
import IOrderRepository from '../../repositories/IOrderRepository';
import Order from '../entities/Order';

class OrderRepository implements IOrderRepository {
  private ormRepository: Repository<Order>;

  constructor() {
    this.ormRepository = getRepository(Order);
  }

  public async delete(id: string): Promise<Order | undefined> {
    const order = this.findById(id);
    await this.ormRepository.delete(id);
    return order;
  }

  public async findById(id: string): Promise<Order | undefined> {
    const order = await this.ormRepository.findOne(id);
    return order;
  }

  public async create(orderData: ICreateOrderDTO): Promise<Order> {
    const order = await this.ormRepository.create(orderData);
    await this.ormRepository.save(order);
    return order;
  }

  public async save(order: Order): Promise<Order> {
    return this.ormRepository.save(order);
  }
}

export default OrderRepository;
