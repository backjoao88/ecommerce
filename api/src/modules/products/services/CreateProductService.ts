import ApiException from '@shared/errors/ApiException';
import { inject, injectable } from 'tsyringe';
import ICategoryRepository from '../infra/repositories/ICategoryRepository';
import IProductRepository from '../infra/repositories/IProductRepository';
import Product from '../infra/typeorm/entities/Product';

interface IRequestDTO {
  title: string;
  price: number;
  price_promotion: number;
  sku: string;
  category_id: string;
  shop_id: string;
}

@injectable()
class CreateProductService {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  public async execute(productData: IRequestDTO): Promise<Product> {
    const category = await this.categoryRepository.findById(productData.category_id);

    if (!category) {
      throw new ApiException('Category not found');
    }

    const response = await this.productRepository.create({
      title: productData.title,
      price: productData.price,
      available: true,
      price_promotion: productData.price_promotion,
      sku: productData.sku,
      category_id: productData.category_id,
      shop_id: productData.shop_id,
    });

    return response;
  }
}

export default CreateProductService;
