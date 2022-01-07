import FakeUserRepository from '@modules/users/infra/repositories/fakes/FakeUserRepository';
import FakeAddressRepository from '@modules/addresses/infra/repositories/fakes/FakeAddressRepository';
import CreateAddressService from '@modules/addresses/services/CreateAddressService';
import CreateUserService from '@modules/users/services/CreateUserService';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import FakeCustomerRepository from '../infra/repositories/fakes/FakeCustomerRepository';
import UpdateCustomerService from './UpdateCustomerService';
import CreateCustomerService from './CreateCustomerService';

describe('UpdateCustomer', () => {
  it('shoud be able to update a customer', async () => {
    const fakeCustomerRepository = new FakeCustomerRepository();
    const fakeAddressRepository = new FakeAddressRepository();
    const fakeUserRepository = new FakeUserRepository();
    const fakeHashProvider = new FakeHashProvider();

    const updateCustomerService = new UpdateCustomerService(fakeCustomerRepository, fakeUserRepository, fakeAddressRepository);
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

    const userToBeUpdated = await createUserService.execute({
      name: 'Teste1234',
      email: 'teste1234@gmail.com',
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

    const addressToBeUpdated = await createAddressService.execute({
      name: 'myend2',
      city: 'itupos',
      cep: '88400-000',
      district: 'asa',
      number: '80',
      complement: 'casa',
    });

    const newCustomer = await createCustomerService.execute({
      name: 'Teste123',
      birth_date: new Date(),
      cpf: '1231231321',
      fone: '1231231',
      user_id: user.id,
      address_id: address.id,
      shop_id: '21332',
    });

    const customer = await updateCustomerService.execute({
      id: newCustomer.id,
      name: 'Teste123',
      birth_date: new Date(),
      cpf: '1231231321',
      fone: '1231231',
      inactive: true,
      user_id: userToBeUpdated.id,
      address_id: addressToBeUpdated.id,
      shop_id: '21332',
    });
    expect(customer).toHaveProperty('id');
  });
});
