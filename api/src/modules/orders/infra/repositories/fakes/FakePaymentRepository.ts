import ICreatePaymentDTO from '@modules/orders/dtos/ICreatePaymentDTO';
import { uuid } from 'uuidv4';
import Payment from '../../typeorm/entities/Payment';
import IPaymentRepository from '../IPaymentRepository';

class FakePaymentRepository implements IPaymentRepository {
  private payments: Payment[] = [];

  public async findById(id: string): Promise<Payment | undefined> {
    const filteredPayment = this.payments.find((u) => u.id === id);
    return filteredPayment;
  }

  public async create(userData: ICreatePaymentDTO): Promise<Payment> {
    const order = new Payment();
    const newPayment = Object.assign(order, { id: uuid() }, userData);
    this.payments.push(newPayment);
    return order;
  }

  public async save(data: Payment): Promise<Payment> {
    const findIndex = this.payments.findIndex((d) => d.id === data.id);

    this.payments[findIndex] = data;

    return data;
  }

  public async delete(id: string): Promise<Payment> {
    const findIndex = this.payments.findIndex((d) => d.id === id);
    const newPayment = Object.assign(this.payments[findIndex]);
    this.payments.splice(findIndex, 1);
    return newPayment;
  }
}

export default FakePaymentRepository;
