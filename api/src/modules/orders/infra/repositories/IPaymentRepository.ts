import ICreatePaymentDTO from '@modules/orders/dtos/ICreatePaymentDTO';
import Payment from '../typeorm/entities/Payment';

interface IPaymentRepository{
  findById(id: string): Promise<Payment | undefined>;
  create(data: ICreatePaymentDTO): Promise<Payment>;
  save(data: Payment): Promise<Payment>;
  delete(id: string): Promise<Payment | undefined> ;
}

export default IPaymentRepository;
