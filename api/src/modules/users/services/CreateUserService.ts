import { injectable, inject } from 'tsyringe';
import { hash } from 'bcryptjs';
import ApiError from '@shared/errors/ApiException';
import User from '@modules/users/infra/typeorm/entities/User';
import IUserRepository from '@modules/users/infra/repositories/IUserRepository';

interface IRequestDTO {
  name: string;
  email: string;
  password: string;
  permissions: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute({
    name, email, password, permissions,
  }: IRequestDTO): Promise<User> {
    const checkSameEmail = await this.userRepository.findByEmail(email);

    if (checkSameEmail) {
      throw new ApiError('E-mail already registered');
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
      permissions,
    });

    return user;
  }
}

export default CreateUserService;
