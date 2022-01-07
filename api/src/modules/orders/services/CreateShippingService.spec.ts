import FakeShippingRepository from '@modules/orders/infra/repositories/fakes/FakeShippingRepository';
import CreateShippingService from '@modules/orders/services/CreateShippingService';

describe('CreateShipping', () => {
  it('shoud be able to create a new shipping', async () => {
    const fakeShippingRepository = new FakeShippingRepository();
    const createShippingService = new CreateShippingService(fakeShippingRepository);
    const shop = await createShippingService.execute({
      status: '21312',
      tracking_code: '1231',
      deadline: 1,
      order_id: '12321',
      type: '2131',
      cost: 1231,
      shop_id: '1232112',
      address_id: '12313',
    });
    expect(shop).toHaveProperty('id');
  });
});
