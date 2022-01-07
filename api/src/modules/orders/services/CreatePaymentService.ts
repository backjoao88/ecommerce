import { injectable, inject } from 'tsyringe';
import Payment from '@modules/orders/infra/typeorm/entities/Payment';
import IPaymentRepository from '@modules/orders/infra/repositories/IPaymentRepository';

interface IRequestDTO {
  amount: number;
  type: string;
  installments: number;
  status: string;
  order_id: string;
  card_id: string;
  shipping_id: string;
  shop_id: string;
}

@injectable()
class CreatePaymentService {
  constructor(
    @inject('PaymentRepository')
    private paymentRepository: IPaymentRepository,
  ) {}

  public async execute(paymentData: IRequestDTO): Promise<Payment> {
    const response = await this.paymentRepository.create({
      amount: paymentData.amount,
      installments: paymentData.installments,
      status: paymentData.status,
      type: paymentData.type,
      order_id: paymentData.order_id,
      shop_id: paymentData.shop_id,
      card_id: paymentData.card_id,
    });

    return response;
  }
}

export default CreatePaymentService;
