import CreateVariationService from '@modules/products/services/CreateVariationService';
import CreateVariationShippingService from '@modules/products/services/CreateVariationShippingService';
import { container } from 'tsyringe';
import { Request, Response } from 'express';

class VariationController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      code, description, price, price_promotion, quantity, blocked_quantity, height_cm, width_cm, depth_cm, weight_kg, free_shipping, shipping_id, product_id, shop_id,
    } = request.body;

    const createVariationService = container.resolve(CreateVariationService);
    const createVariationShippingService = container.resolve(CreateVariationShippingService);

    const newVariationShipping = await createVariationShippingService.execute({
      depth_cm,
      height_cm,
      weight_kg,
      free_shipping,
      width_cm,
    });

    const newVariation = await createVariationService.execute({
      code, description, price, price_promotion, quantity, blocked_quantity, shippingVariation_id: newVariationShipping.id, product_id, shop_id,
    });

    return response.json(newVariation);
  }
}

export default VariationController;
