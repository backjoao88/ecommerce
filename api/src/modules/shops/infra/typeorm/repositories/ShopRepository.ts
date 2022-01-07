import { getRepository, Repository, Not } from 'typeorm';

import IShopRepository from '@modules/shops/infra/repositories/IShopRepository';
import ICreateShopDTO from '@modules/shops/infra/dtos/ICreateShopDTO';

import Shop from '../entities/Shop';

class ShopRepository implements IShopRepository {
  private ormRepository: Repository<Shop>;

  constructor() {
    this.ormRepository = getRepository(Shop);
  }

  public async findById(id: string): Promise<Shop | undefined> {
    const shop = await this.ormRepository.findOne(id);

    return shop;
  }

  public async findByCnpj(cnpj: string): Promise<Shop | undefined> {
    const shop = await this.ormRepository.findOne({
      where: { cnpj },
    });

    return shop;
  }

  public async create(userData: ICreateShopDTO): Promise<Shop> {
    const shop = this.ormRepository.create(userData);

    await this.ormRepository.save(shop);

    return shop;
  }

  public async save(shop: Shop): Promise<Shop> {
    return this.ormRepository.save(shop);
  }
}

export default ShopRepository;
