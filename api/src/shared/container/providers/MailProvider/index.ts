import { container } from 'tsyringe';

// import mailConfig from 'config/mail';
import IMailProvider from './models/IMailProvider';
import EtherealMailProvider from './implementations/ethereal/EtherealMailProvider';

const providers = {
  ethereal: container.resolve(EtherealMailProvider),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  providers.ethereal,
);
