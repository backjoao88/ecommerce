import path from 'path';
import { injectable, inject } from 'tsyringe';

import EtherealMailProvider from '@shared/container/MailProvider/EtherealMailProvider';
import IUserRepository from '../infra/repositories/IUserRepository';
import IUserTokensRepository from '../infra/repositories/IUserTokensRepository';

interface IRequestDTO {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,
  ) {}

  public async execute({ email }: IRequestDTO): Promise<void> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('User does not exists.');
    }

    const { token } = await this.userTokensRepository.generate(user.id);

    const forgotPasswordTemplate = path.resolve(
      __dirname,
      '..',
      'views',
      'forgot_password.hbs',
    );

    // GENERALIZAR
    const etherealMailProvider = new EtherealMailProvider();

    await etherealMailProvider.sendMail(user.email, '[Burg Circuitos] Recuperação de senha', {
      file: forgotPasswordTemplate,
      variables: { name: user.name, link: `https://localhost:3000/password/reset?token=${token}` },
    });
  }
}

export default SendForgotPasswordEmailService;
