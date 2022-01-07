import FakeUserRepository from '@modules/users/infra/repositories/fakes/FakeUserRepository';
import FakeAddressRepository from '@modules/addresses/infra/repositories/fakes/FakeAddressRepository';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import CreateUserService from '@modules/users/services/CreateUserService';
import CreateAddressService from '@modules/addresses/services/CreateAddressService';
import FakeCustomerRepository from '../infra/repositories/fakes/FakeCustomerRepository';
import UpdateCustomerService from './UpdateCustomerService';
import CreateCustomerService from './CreateCustomerService';

describe('CreateCustomer', () => {
  it('shoud be able to create a new customer', async () => {
    const fakeCustomerRepository = new FakeCustomerRepository();
    const fakeAddressRepository = new FakeAddressRepository();
    const fakeUserRepository = new FakeUserRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createCustomerService = new CreateCustomerService(fakeCustomerRepository, fakeUserRepository, fakeAddressRepository);
    const createUserService = new CreateUserService(fakeUserRepository, fakeHashProvider);
    const createAddressService = new CreateAddressService(fakeAddressRepository);

    const user = await createUserService.execute({
      name: 'Teste123',
      email: 'teste123@gmail.com',
      password: '123',
      permissions: 'customer',
      shop_id: '321321',
    });

    const address = await createAddressService.execute({
      name: 'myend',
      city: 'itupos',
      cep: '88400-000',
      district: 'asa',
      number: '80',
      complement: 'casa',
    });

    const customer = await createCustomerService.execute({
      name: 'Teste123',
      birth_date: new Date(),
      cpf: '1231231321',
      fone: '1231231',
      user_id: user.id,
      address_id: address.id,
      shop_id: '21332',
    });
    expect(customer).toHaveProperty('id');
  });
});
