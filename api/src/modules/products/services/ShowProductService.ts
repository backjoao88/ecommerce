import ApiException from '@shared/errors/ApiException';
import { id } from 'date-fns/locale';
import { injectable, inject } from 'tsyringe';
import IProductRepository from '../infra/repositories/IProductRepository';
import Product from '../infra/typeorm/entities/Product';

interface IRequestDTO{
  id: string;
}

@injectable()
class ShowProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  public async execute(productData: IRequestDTO): Promise<Product> {
    const product = await this.productRepository.findById(productData.id);

    if (!product) {
      throw new ApiException('Product not found');
    }

    return product;
  }
}

export default ShowProductService;
