import FakePaymentRepository from '../infra/repositories/fakes/FakePaymentRepository';
import CreatePaymentService from './CreatePaymentService';

describe('CreatePayment', () => {
  it('shoud be able to create a new payment', async () => {
    const fakePaymentRepository = new FakePaymentRepository();
    const createPaymentService = new CreatePaymentService(fakePaymentRepository);
    const payment = await createPaymentService.execute({
      status: '1231',
      installments: 1,
      amount: 200,
      order_id: '1',
      type: '231',
      shipping_id: '12',
      card_id: '312',
      shop_id: '1231231',
    });
    expect(payment).toHaveProperty('id');
  });
});
