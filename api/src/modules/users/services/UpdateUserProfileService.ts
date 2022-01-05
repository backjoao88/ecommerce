import { injectable, inject } from 'tsyringe';
import { hash, compare } from 'bcryptjs';
import ApiException from '@shared/errors/ApiException';
import User from '@modules/users/infra/typeorm/entities/User';
import { differenceInHoursWithOptions } from 'date-fns/fp';
import IUserRepository from '../infra/repositories/IUserRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface IRequestDTO {
  id: string;
  name: string;
  email: string;
  old_password?: string;
  password?: string;
}

@injectable()
export default class UpdateProfileService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    id,
    name,
    email,
    password,
    old_password,
  }: IRequestDTO): Promise<User> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new ApiException('User not found.');
    }

    const checkEmail = await this.userRepository.findByEmail(email);

    if (checkEmail && checkEmail.id !== id) {
      throw new ApiException('This email is already used by another user.');
    }

    if (password && !old_password) {
      throw new ApiException('You need to inform the current password.');
    }

    if (password && old_password) {
      const checkOldPassword = await this.hashProvider.compareHash(password, old_password);

      if (!checkOldPassword) {
        throw new ApiException('Wrong current password.');
      }

      user.password = await this.hashProvider.generateHash(password);
    }

    user.name = name;
    user.email = email;

    return this.userRepository.save(user);
  }
}
