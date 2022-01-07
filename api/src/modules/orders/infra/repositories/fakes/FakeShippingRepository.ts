import ICreateShippingDTO from '@modules/orders/dtos/ICreateShippingDTO';
import { uuid } from 'uuidv4';
import Shipping from '../../typeorm/entities/Shipping';
import IShippingRepository from '../IShippingRepository';

class FakeShippingRepository implements IShippingRepository {
  private shippings: Shipping[] = [];

  public async findById(id: string): Promise<Shipping | undefined> {
    const filteredShipping = this.shippings.find((u) => u.id === id);
    return filteredShipping;
  }

  public async create(userData: ICreateShippingDTO): Promise<Shipping> {
    const shipping = new Shipping();
    const newShipping = Object.assign(shipping, { id: uuid() }, userData);
    this.shippings.push(newShipping);
    return shipping;
  }

  public async save(data: Shipping): Promise<Shipping> {
    const findIndex = this.shippings.findIndex((d) => d.id === data.id);

    this.shippings[findIndex] = data;

    return data;
  }

  public async delete(id: string): Promise<Shipping> {
    const findIndex = this.shippings.findIndex((d) => d.id === id);
    const newShipping = Object.assign(this.shippings[findIndex]);
    this.shippings.splice(findIndex, 1);
    return newShipping;
  }
}

export default FakeShippingRepository;
