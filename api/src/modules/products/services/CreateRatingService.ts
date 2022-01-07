import ApiException from '@shared/errors/ApiException';
import { inject, injectable } from 'tsyringe';
import IProductRepository from '../infra/repositories/IProductRepository';
import IRatingRepository from '../infra/repositories/IRatingRepository';
import Rating from '../infra/typeorm/entities/Rating';

interface IRequestDTO {
  name: string;
  text: string;
  score: number;
  product_id: string;
  shop_id: string;
}

@injectable()
class CreateRatingService {
  constructor(
    @inject('RatingRepository')
    private ratingRepository: IRatingRepository,
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  public async execute(ratingData: IRequestDTO): Promise<Rating> {
    const { product_id } = ratingData;
    const product = await this.productRepository.findById(product_id);

    if (!product) {
      throw new ApiException('Product not found');
    }
    const response = await this.ratingRepository.create({
      name: ratingData.name,
      text: ratingData.text,
      score: ratingData.score,
      product_id: ratingData.product_id,
      shop_id: ratingData.shop_id,
    });
    return response;
  }
}

export default CreateRatingService;
