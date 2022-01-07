import { getRepository, Repository } from 'typeorm';

import Variation from '../entities/Variation';
import ICreateVariationDTO from '../../dtos/ICreateVariationDTO';
import IVariationRepository from '../../repositories/IVariationRepository';

class VariationRepository implements IVariationRepository {
  private ormRepository: Repository<Variation>;

  constructor() {
    this.ormRepository = getRepository(Variation);
  }

  public async findByDescription(data: Variation): Promise<Variation | undefined> {
    const variation = await this.ormRepository.findOne(data.description);
    return variation;
  }

  public async delete(id: string): Promise<Variation | undefined> {
    const variation = this.findById(id);
    await this.ormRepository.delete(id);
    return variation;
  }

  public async findById(id: string): Promise<Variation | undefined> {
    const variation = await this.ormRepository.findOne(id);
    return variation;
  }

  public async create(data: ICreateVariationDTO): Promise<Variation> {
    const variation = await this.ormRepository.create(data);

    await this.ormRepository.save(variation);

    return variation;
  }

  public async save(variation: Variation): Promise<Variation> {
    return this.ormRepository.save(variation);
  }
}

export default VariationRepository;
