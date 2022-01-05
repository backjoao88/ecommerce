import { injectable, inject } from 'tsyringe';
import ApiException from '@shared/errors/ApiException';
import User from '@modules/users/infra/typeorm/entities/User';
import IUserRepository from '@modules/users/infra/repositories/IUserRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequestDTO {
  name: string;
  email: string;
  password: string;
  permissions: string;
  shop_id: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    name, email, password, permissions, shop_id,
  }: IRequestDTO): Promise<User> {
    const checkSameEmail = await this.userRepository.findByEmail(email);

    if (checkSameEmail) {
      throw new ApiException('E-mail already registered');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
      permissions,
      shop_id,
    });

    return user;
  }
}

export default CreateUserService;
