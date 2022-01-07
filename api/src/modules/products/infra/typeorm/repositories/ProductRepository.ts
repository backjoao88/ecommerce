import { getRepository, Repository, Not } from 'typeorm';

import IProductRepository from '../../repositories/IProductRepository';
import ICreateProductDTO from '../../dtos/ICreateProductDTO';

import Product from '../entities/Product';

class ProductRepository implements IProductRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async findByDescription(data: Product): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne(data.description);
    return product;
  }

  public async delete(id: string): Promise<Product | undefined> {
    const product = this.findById(id);
    await this.ormRepository.delete(id);
    return product;
  }

  public async findById(id: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne(id);
    return product;
  }

  public async create(userData: ICreateProductDTO): Promise<Product> {
    const product = await this.ormRepository.create(userData);

    await this.ormRepository.save(product);

    return product;
  }

  public async save(product: Product): Promise<Product> {
    return this.ormRepository.save(product);
  }
}

export default ProductRepository;
