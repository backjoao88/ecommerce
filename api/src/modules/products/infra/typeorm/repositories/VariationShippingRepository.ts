import { getRepository, Repository } from 'typeorm';

import VariationShipping from '../entities/VariationShipping';
import ICreateVariationShippingDTO from '../../dtos/ICreateVariationShippingDTO';
import IVariationShippingRepository from '../../repositories/IVariationShippingRepository';

class VariationShippingRepository implements IVariationShippingRepository {
  private ormRepository: Repository<VariationShipping>;

  constructor() {
    this.ormRepository = getRepository(VariationShipping);
  }

  public async delete(id: string): Promise<VariationShipping | undefined> {
    const variationShipping = this.findById(id);
    await this.ormRepository.delete(id);
    return variationShipping;
  }

  public async findById(id: string): Promise<VariationShipping | undefined> {
    const variationShipping = await this.ormRepository.findOne(id);
    return variationShipping;
  }

  public async create(data: ICreateVariationShippingDTO): Promise<VariationShipping> {
    const variationShipping = await this.ormRepository.create(data);

    await this.ormRepository.save(variationShipping);

    return variationShipping;
  }

  public async save(variationShipping: VariationShipping): Promise<VariationShipping> {
    return this.ormRepository.save(variationShipping);
  }
}

export default VariationShippingRepository;
