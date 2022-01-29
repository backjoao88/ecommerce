import { injectable, inject } from 'tsyringe';
import IVariationShippingRepository from '../infra/repositories/IVariationShippingRepository';
import VariationShipping from '../infra/typeorm/entities/VariationShipping';

interface IRequestDTO {
  height_cm: number;
  width_cm: number;
  depth_cm: number;
  weight_kg: number;
  free_shipping: boolean;
}

@injectable()
class CreateVariationShippingService {
  constructor(
    @inject('VariationShippingRepository')
    private variationShippingRepository: IVariationShippingRepository,

  ) {}

  public async execute(variationShippingData: IRequestDTO): Promise<VariationShipping> {
    const response = await this.variationShippingRepository.create({
      height_cm: variationShippingData.height_cm,
      width_cm: variationShippingData.width_cm,
      depth_cm: variationShippingData.depth_cm,
      weight_kg: variationShippingData.weight_kg,
      free_shipping: variationShippingData.free_shipping,
    });

    return response;
  }
}

export default CreateVariationShippingService;
