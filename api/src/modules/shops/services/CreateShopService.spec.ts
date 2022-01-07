import FakeShopRepository from '../infra/repositories/fakes/FakeShopRepository';
import IShopRespository from '../infra/repositories/IShopRepository';
import CreateShopService from './CreateShopService';

describe('CreateShop', () => {
  it('shoud be able to create a new shop', async () => {
    const fakeShopRepository = new FakeShopRepository();
    const createShopService = new CreateShopService(fakeShopRepository);
    const shop = await createShopService.execute({
      name: 'Teste123',
      cnpj: '06281729000160',
      email: 'teste123@gmail.com',
      fone: '1',
      address_id: '1',
    });
    expect(shop).toHaveProperty('id');
  });
});
