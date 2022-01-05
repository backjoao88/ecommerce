import { injectable, inject } from 'tsyringe';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '@modules/users/infra/typeorm/entities/User';
import authConfig from '@config/auth';
import ApiException from '@shared/errors/ApiException';
import IUserRepository from '../infra/repositories/IUserRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

interface RequestDTO {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

@injectable()
export default class AuthenticateUserService {
  constructor(
      @inject('UserRepository')
      private userRepository: IUserRepository,

      @inject('HashProvider')
      private hashProvider: IHashProvider,
  ) {}

  public async execute({ email, password }: RequestDTO): Promise<Response> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new ApiException('User not found.', 401);
    }

    const passwordMatched = await this.hashProvider.compareHash(password, user.password);

    if (!passwordMatched) {
      throw new ApiException('Email/Password does not match.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({ perm: user.permissions, shop_id: user.shop_id }, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}
