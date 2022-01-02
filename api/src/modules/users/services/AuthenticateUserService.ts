import { injectable, inject } from 'tsyringe';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '@modules/users/infra/typeorm/entities/User';
import authConfig from '@config/auth';
import ApiError from '@shared/errors/ApiException';
import IUserRepository from '../infra/repositories/IUserRepository';

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
  ) {}

  public async execute({ email, password }: RequestDTO): Promise<Response> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new ApiError('User not found.', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new ApiError('Email/Password does not match.', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}
