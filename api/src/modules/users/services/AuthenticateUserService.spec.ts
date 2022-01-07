import ApiException from '@shared/errors/ApiException';
import FakeUserRepository from '../infra/repositories/fakes/FakeUserRepository';
import IUserRespository from '../infra/repositories/IUserRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserService from './AuthenticateUserService';

describe('AuthenticateUser', () => {
  let fakeUserRepository: IUserRespository;
  let authenticateUser: AuthenticateUserService;
  let fakeHashProvider: FakeHashProvider;

  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();
    fakeHashProvider = new FakeHashProvider();
    authenticateUser = new AuthenticateUserService(
      fakeUserRepository,
      fakeHashProvider,
    );
  });

  it('should be able to authenticate', async () => {
    const user = await fakeUserRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      permissions: '',
      shop_id: '123',
    });

    const response = await authenticateUser.execute({
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should NOT be able to authenticate', async () => {
    const user = await fakeUserRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      permissions: '',
      shop_id: '123',
    });

    expect(authenticateUser.execute({
      email: 'johndoe@example.com',
      password: '1234562',
    })).rejects.toBeInstanceOf(ApiException);
  });

  it('should NOT find a user to authenticate', async () => {
    expect(authenticateUser.execute({
      email: 'johndoe2@example.com',
      password: '1234562',
    })).rejects.toBeInstanceOf(ApiException);
  });
});
