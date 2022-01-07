import FakeCustomerRepository from '@modules/customers/infra/repositories/fakes/FakeCustomerRepository';
import FakeOrderRepository from '@modules/orders/infra/repositories/fakes/FakeOrderRepository';
import CreateOrderService from '@modules/orders/services/CreateOrderService';
import FakePaymentRepository from '../infra/repositories/fakes/FakePaymentRepository';
import FakeShippingRepository from '../infra/repositories/fakes/FakeShippingRepository';

describe('CreateOrder', () => {
  it('shoud be able to create a new order', async () => {
    const fakeOrderRepository = new FakeOrderRepository();
    const fakeCustomerRepository = new FakeCustomerRepository();
    const fakePaymentRepository = new FakePaymentRepository();
    const fakeShippingRepository = new FakeShippingRepository();
    const createOrderService = new CreateOrderService(fakeOrderRepository, fakeCustomerRepository, fakeShippingRepository, fakePaymentRepository);
    const order = await createOrderService.execute({
      code: '1231',
      total_price: 12.00,
      total_price_promotion: 12.00,
      customer_id: '1231',
      payment_id: '1231',
      shipping_id: '1231',
    });
    expect(order).toHaveProperty('id');
  });
});
