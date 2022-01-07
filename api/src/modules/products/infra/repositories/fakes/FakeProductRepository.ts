import { uuid } from 'uuidv4';
import ICreateProductDTO from '../../dtos/ICreateProductDTO';
import Product from '../../typeorm/entities/Product';
import IProductRepository from '../IProductRepository';

class FakeProductRepository implements IProductRepository {
  private products: Product[] = [];

  public async findById(id: string): Promise<Product | undefined> {
    const filteredCustomer = this.products.find((u) => u.id === id);
    return filteredCustomer;
  }

  public async findByDescription(data: Product): Promise<Product | undefined> {
    const filteredCustomer = this.products.find((u) => u.description === data.description);
    return filteredCustomer;
  }

  public async create(userData: ICreateProductDTO): Promise<Product> {
    const product = new Product();
    const newProduct = Object.assign(product, { id: uuid() }, userData);
    this.products.push(newProduct);
    return product;
  }

  public async save(data: Product): Promise<Product> {
    const findIndex = this.products.findIndex((d) => d.id === data.id);

    this.products[findIndex] = data;

    return data;
  }

  delete(id: string): Promise<Product> {
    const findIndex = this.products.findIndex((d) => d.id === id);
    const newProduct = Object.assign(this.products[findIndex]);
    this.products.splice(findIndex, 1);
    return newProduct;
  }
}

export default FakeProductRepository;
