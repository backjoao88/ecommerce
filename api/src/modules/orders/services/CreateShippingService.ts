import { injectable, inject } from 'tsyringe';
import Shipping from '@modules/orders/infra/typeorm/entities/Shipping';
import IShippingRepository from '@modules/orders/infra/repositories/IShippingRepository';

interface IRequestDTO {
  status: string;
  tracking_code: string;
  type: string;
  cost: number;
  deadline: number;
  address_id: string;
  order_id: string;
  shop_id: string;
}

@injectable()
class CreateShippingService {
  constructor(
    @inject('ShippingRepository')
    private shippingRepository: IShippingRepository,
  ) {}

  public async execute(shippingData: IRequestDTO): Promise<Shipping> {
    const response = await this.shippingRepository.create({
      status: shippingData.status,
      tracking_code: shippingData.tracking_code,
      type: shippingData.type,
      cost: shippingData.cost,
      address_id: shippingData.address_id,
      order_id: shippingData.order_id,
      shop_id: shippingData.shop_id,
      deadline: shippingData.deadline,
    });

    return response;
  }
}

export default CreateShippingService;
