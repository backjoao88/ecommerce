import { injectable, inject } from 'tsyringe';
import Cart from '@modules/orders/infra/typeorm/entities/Cart';
import ICartRepository from '@modules/orders/infra/repositories/ICartRepository';
import ApiException from '@shared/errors/ApiException';
import IVariationRepository from '@modules/products/infra/repositories/IVariationRepository';

interface IRequestDTO {
  quantity: number;
  price_unitary: number;
  variation_id: string;
}

@injectable()
class CreateCartService {
  constructor(
    @inject('CartRepository')
    private cartRepository: ICartRepository,

    @inject('VariationRepository')
    private variationRepository: IVariationRepository,
  ) {}

  public async execute(cartData: IRequestDTO): Promise<Cart> {
    const variation = this.variationRepository.findById(cartData.variation_id);

    if (!variation) {
      throw new ApiException('Variation not found');
    }

    const response = await this.cartRepository.create({
      quantity: cartData.quantity,
      price_unitary: cartData.price_unitary,
      variation_id: cartData.variation_id,
    });

    return response;
  }
}

export default CreateCartService;
