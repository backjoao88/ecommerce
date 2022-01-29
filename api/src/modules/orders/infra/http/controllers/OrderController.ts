import CreateOrderService from '@modules/orders/services/CreateOrderService';
import { container } from 'tsyringe';
import { Request, Response } from 'express';

class OrderController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      code, total_price, total_price_promotion, customer_id, payment_id, shipping_id,
    } = request.body;

    const createOrderService = container.resolve(CreateOrderService);

    const newOrder = await createOrderService.execute({
      code, total_price, total_price_promotion, customer_id, payment_id, shipping_id,
    });

    return response.json(newOrder);
  }
}

export default OrderController;
