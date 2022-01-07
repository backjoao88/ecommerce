import Product from '@modules/products/infra/typeorm/entities/Product';
import ICreateProductDTO from '../dtos/ICreateProductDTO';

interface IProductRepository{
  findById(id: string): Promise<Product | undefined>;
  findByDescription(data: Product): Promise<Product | undefined>;
  create(data: ICreateProductDTO): Promise<Product>;
  save(data: Product): Promise<Product>;
  delete(id: string): Promise<Product | undefined> ;
}

export default IProductRepository;
