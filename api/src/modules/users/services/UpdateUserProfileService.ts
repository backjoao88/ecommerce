import { injectable, inject } from 'tsyringe';
import { hash, compare } from 'bcryptjs';
import ApiError from '@shared/errors/ApiException';
import User from '@modules/users/infra/typeorm/entities/User';
import IUserRepository from '../infra/repositories/IUserRepository';

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
      throw new ApiError('User not found.');
    }

    const checkEmail = await this.userRepository.findByEmail(email);

    if (checkEmail && checkEmail.id !== id) {
      throw new ApiError('This email is already used by another user.');
    }

    if (password && !old_password) {
      throw new ApiError('You need to inform the current password.');
    }

    if (password && old_password) {
      const checkOldPassword = await compare(
        old_password,
        user.password,
      );

      if (!checkOldPassword) {
        throw new ApiError('Wrong current password.');
      }

      user.password = await hash(password, 8);
    }

    user.name = name;
    user.email = email;

    return this.userRepository.save(user);
  }
}
