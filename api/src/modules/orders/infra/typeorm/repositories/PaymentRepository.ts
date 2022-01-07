import ICreatePaymentDTO from '@modules/orders/dtos/ICreatePaymentDTO';
import { Repository, getRepository } from 'typeorm';
import IPaymentRepository from '../../repositories/IPaymentRepository';
import Payment from '../entities/Payment';

class PaymentRepository implements IPaymentRepository {
  private ormRepository: Repository<Payment>;

  constructor() {
    this.ormRepository = getRepository(Payment);
  }

  public async delete(id: string): Promise<Payment | undefined> {
    const payment = this.findById(id);
    await this.ormRepository.delete(id);
    return payment;
  }

  public async findById(id: string): Promise<Payment | undefined> {
    const payment = await this.ormRepository.findOne(id);
    return payment;
  }

  public async create(paymentData: ICreatePaymentDTO): Promise<Payment> {
    const payment = await this.ormRepository.create(paymentData);
    await this.ormRepository.save(payment);
    return payment;
  }

  public async save(payment: Payment): Promise<Payment> {
    return this.ormRepository.save(payment);
  }
}

export default PaymentRepository;
