import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/ApiException';
import IUserRepository from '../infra/repositories/IUserRepository';

import User from '../infra/typeorm/entities/User';

interface IRequestDTO {
  id: string;
}

@injectable()
export default class ShowProfileService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute({ id }: IRequestDTO): Promise<User> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError('User not found.');
    }

    // delete user.password;

    return user;
  }
}
