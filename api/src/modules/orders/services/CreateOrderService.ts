import { injectable, inject } from 'tsyringe';
import Order from '@modules/orders/infra/typeorm/entities/Order';
import IOrderRepository from '@modules/orders/infra/repositories/IOrderRepository';
import ICustomerRepository from '@modules/customers/infra/repositories/ICustomerRepository';
import ApiException from '@shared/errors/ApiException';
import IShippingRepository from '../infra/repositories/IShippingRepository';
import IPaymentRepository from '../infra/repositories/IPaymentRepository';

interface IRequestDTO {
  code: string;
  total_price: number;
  total_price_promotion: number;
  customer_id: string;
  payment_id: string;
  shipping_id: string;
}

@injectable()
class CreateOrderService {
  constructor(
    @inject('OrderRepository')
    private orderRepository: IOrderRepository,
    @inject('CustomerRepository')
    private customersRepository: ICustomerRepository,
    @inject('ShippingRepository')
    private shippingsRepository: IShippingRepository,
    @inject('PaymentRepository')
    private paymentsRepository: IPaymentRepository,
  ) {}

  public async execute(orderData: IRequestDTO): Promise<Order> {
    const customer = this.customersRepository.findById(orderData.customer_id);

    if (!customer) {
      throw new ApiException('Customer not found');
    }

    const shipping = this.shippingsRepository.findById(orderData.shipping_id);

    if (!shipping) {
      throw new ApiException('Shipping not found');
    }

    const payment = this.paymentsRepository.findById(orderData.payment_id);

    if (!payment) {
      throw new ApiException('Payment not found');
    }

    const response = await this.orderRepository.create({
      code: orderData.code,
      total_price: orderData.total_price,
      total_price_promotion: orderData.total_price_promotion,
      customer_id: orderData.customer_id,
      payment_id: orderData.payment_id,
      shipping_id: orderData.shipping_id,
      cancelled: false,
    });

    return response;
  }
}

export default CreateOrderService;
