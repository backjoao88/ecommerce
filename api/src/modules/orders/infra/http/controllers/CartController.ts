import CreateCartService from '@modules/orders/services/CreateCartService';
import { container } from 'tsyringe';
import { Request, Response } from 'express';

class CartController {
  public async      create(request: Request, response: Response): Promise<Response> {
    const {
      quantity,
      price_unitary,
      variation_id,
    } = request.body;

    const createCartService = container.resolve(CreateCartService);

    const newCart = await createCartService.execute({
      quantity,
      price_unitary,
      variation_id,
    });

    return response.json(newCart);
  }
}

export default CartController;
