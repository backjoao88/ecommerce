import { injectable, inject } from 'tsyringe';
import Payment from '@modules/orders/infra/typeorm/entities/Payment';
import IPaymentRepository from '@modules/orders/infra/repositories/IPaymentRepository';

interface IRequestDTO {
  amount: number;
  installments: number;
  status: string;
  type: string;
  card_id: string;
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
      card_id: paymentData.card_id,
    });

    return response;
  }
}

export default CreatePaymentService;
