import ApiException from '@shared/errors/ApiException';
import FakeUserRepository from '../infra/repositories/fakes/FakeUserRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import CreateUserService from './CreateUserService';

describe('CreateUserService', () => {
  it('shoud be able to create a new user', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUserService = new CreateUserService(fakeUserRepository, fakeHashProvider);
    const user = await createUserService.execute({
      name: 'Teste123',
      email: 'teste123@gmail.com',
      password: '123',
      permissions: 'customer',
      shop_id: '321321',
    });
    expect(user).toHaveProperty('id');
  });

  it('should be able to NOT create a user with same email', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUserService = new CreateUserService(fakeUserRepository, fakeHashProvider);
    await createUserService.execute({
      name: 'Teste123',
      email: 'teste123@gmail.com',
      password: '123',
      permissions: 'customer',
      shop_id: '123',
    });
    expect(
      createUserService.execute({
        name: 'Teste123',
        email: 'teste123@gmail.com',
        password: '123',
        permissions: 'customer',
        shop_id: '123',
      }),
    ).rejects.toBeInstanceOf(ApiException);
  });
});
