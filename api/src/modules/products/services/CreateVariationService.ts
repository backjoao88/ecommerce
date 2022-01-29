import ApiException from '@shared/errors/ApiException';
import { inject, injectable } from 'tsyringe';
import IProductRepository from '../infra/repositories/IProductRepository';
import IVariationRepository from '../infra/repositories/IVariationRepository';
import Variation from '../infra/typeorm/entities/Variation';

interface IRequestDTO {
  code: string;
  description: string;
  price: number,
  price_promotion: number;
  quantity: number
  blocked_quantity: number
  product_id: string;
  shop_id: string;
  shippingVariation_id: string;
}

@injectable()
class CreateVariationService {
  constructor(
    @inject('VariationRepository')
    private variationRepository: IVariationRepository,
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  public async execute(variationData: IRequestDTO): Promise<Variation> {
    const { product_id } = variationData;
    const product = await this.productRepository.findById(product_id);

    if (!product) {
      throw new ApiException('Product not found');
    }

    const response = await this.variationRepository.create({
      code: variationData.code,
      blocked_quantity: variationData.blocked_quantity,
      price: variationData.price,
      price_promotion: variationData.price_promotion,
      description: variationData.description,
      product_id: variationData.product_id,
      quantity: variationData.quantity,
      shippingVariation_id: variationData.shippingVariation_id,
      shop_id: variationData.shop_id,
    });

    return response;
  }
}

export default CreateVariationService;
