import ICreateShippingDTO from '@modules/orders/dtos/ICreateShippingDTO';
import { Repository, getRepository } from 'typeorm';
import IShippingRepository from '../../repositories/IShippingRepository';
import Shipping from '../entities/Shipping';

class ShippingRepository implements IShippingRepository {
  private ormRepository: Repository<Shipping>;

  constructor() {
    this.ormRepository = getRepository(Shipping);
  }

  public async delete(id: string): Promise<Shipping | undefined> {
    const shipping = this.findById(id);
    await this.ormRepository.delete(id);
    return shipping;
  }

  public async findById(id: string): Promise<Shipping | undefined> {
    const shipping = await this.ormRepository.findOne(id);
    return shipping;
  }

  public async create(shippingData: ICreateShippingDTO): Promise<Shipping> {
    const shipping = await this.ormRepository.create(shippingData);
    await this.ormRepository.save(shipping);
    return shipping;
  }

  public async save(shipping: Shipping): Promise<Shipping> {
    return this.ormRepository.save(shipping);
  }
}

export default ShippingRepository;
