import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';
import { uuid } from 'uuidv4';
import Order from '../../typeorm/entities/Order';
import IOrderRepository from '../IOrderRepository';

class FakeOrderRepository implements IOrderRepository {
  private orders: Order[] = [];

  public async findById(id: string): Promise<Order | undefined> {
    const filteredOrder = this.orders.find((u) => u.id === id);
    return filteredOrder;
  }

  public async create(userData: ICreateOrderDTO): Promise<Order> {
    const order = new Order();
    const newOrder = Object.assign(order, { id: uuid() }, userData);
    this.orders.push(newOrder);
    return order;
  }

  public async save(data: Order): Promise<Order> {
    const findIndex = this.orders.findIndex((d) => d.id === data.id);

    this.orders[findIndex] = data;

    return data;
  }

  public async delete(id: string): Promise<Order> {
    const findIndex = this.orders.findIndex((d) => d.id === id);
    const newOrder = Object.assign(this.orders[findIndex]);
    this.orders.splice(findIndex, 1);
    return newOrder;
  }
}

export default FakeOrderRepository;
