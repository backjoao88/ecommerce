import CreatePaymentService from '@modules/orders/services/CreatePaymentService';
import { container } from 'tsyringe';
import { Request, Response } from 'express';

class PaymentController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      amount,
      installments,
      status,
      type,
      card_id,
    } = request.body;

    const createPaymentService = container.resolve(CreatePaymentService);

    const newPayment = await createPaymentService.execute({
      amount,
      installments,
      status,
      type,
      card_id,
    });

    return response.json(newPayment);
  }
}

export default PaymentController;
