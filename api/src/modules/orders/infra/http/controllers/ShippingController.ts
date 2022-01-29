import CreateShippingService from '@modules/orders/services/CreateShippingService';
import { container } from 'tsyringe';
import { Request, Response } from 'express';

class ShippingController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      status,
      tracking_code,
      type,
      cost,
      deadline,
      address_id,
      order_id,
      shop_id,
    } = request.body;

    const createShippingService = container.resolve(CreateShippingService);

    const newShipping = await createShippingService.execute({
      status,
      tracking_code,
      type,
      cost,
      deadline,
      address_id,
      order_id,
      shop_id,
    });

    return response.json(newShipping);
  }
}

export default ShippingController;
