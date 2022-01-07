import { getRepository, Repository, Not } from 'typeorm';

import ICategoryRepository from '../../repositories/ICategoryRepository';
import ICreateCategoryDTO from '../../dtos/ICreateCategoryDTO';

import Category from '../entities/Category';

class CategoryRepository implements ICategoryRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  findByDescription(data: Category): Promise<Category | undefined> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<Category | undefined> {
    throw new Error('Method not implemented.');
  }

  public async findById(id: string): Promise<Category | undefined> {
    const address = await this.ormRepository.findOne(id);
    return address;
  }

  public async create(userData: ICreateCategoryDTO): Promise<Category> {
    const address = await this.ormRepository.create(userData);

    await this.ormRepository.save(address);

    return address;
  }

  public async save(address: Category): Promise<Category> {
    return this.ormRepository.save(address);
  }
}

export default CategoryRepository;
