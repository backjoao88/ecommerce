import { uuid } from 'uuidv4';
import IShopRepository from '@modules/shops/infra/repositories/IShopRepository';
import ICreateShopDTO from '@modules/shops/infra/dtos/ICreateShopDTO';

import Shop from '../../typeorm/entities/Shop';

class FakeShopRepository implements IShopRepository {
  private shops: Shop[] = [];

  save(data: Shop): Promise<Shop> {
    throw new Error('Method not implemented.');
  }

  public async findByCnpj(cnpj: string): Promise<Shop | undefined> {
    const filteredShop = this.shops.find((shop) => shop.cnpj === cnpj);
    return filteredShop;
  }

  public async findById(id: string): Promise<Shop | undefined> {
    const filteredShop = this.shops.find((shop) => shop.id === id);
    return filteredShop;
  }

  public async create(shopData: ICreateShopDTO): Promise<Shop> {
    const shop = new Shop();
    const newUser = Object.assign(shop, { id: uuid() }, shopData);
    this.shops.push(newUser);
    return shop;
  }
}

export default FakeShopRepository;
