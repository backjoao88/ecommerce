import { container } from 'tsyringe';

// import mailConfig from 'config/mail';
import IHashProvider from './models/IHashProvider';
import BCryptHashProvider from './implementations/BCryptHashProvider';

const providers = {
  bcrypt: container.resolve(BCryptHashProvider),
};

container.registerInstance<IHashProvider>(
  'HashProvider',
  providers.bcrypt,
);
