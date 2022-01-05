import { container } from 'tsyringe';

import IUserRepository from '@modules/users/infra/repositories/IUserRepository';
import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository';

import IShopRepository from '@modules/shops/infra/repositories/IShopRepository';
import ShopRepository from '@modules/shops/infra/typeorm/repositories/ShopRepository';

import IUserTokensRepository from '@modules/users/infra/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import IAddressRepository from '@modules/shops/infra/repositories/IAddressRepository';
import AddressRepository from '@modules/shops/infra/typeorm/repositories/AddressRepository';

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.registerSingleton<IShopRepository>(
  'ShopRepository',
  ShopRepository,
);

container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  AddressRepository,
);
