import { container } from 'tsyringe';

import IUserRepository from '@modules/users/infra/repositories/IUserRepository';
import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository';

import IShopRepository from '@modules/shops/infra/repositories/IShopRepository';
import ShopRepository from '@modules/shops/infra/typeorm/repositories/ShopRepository';

import IUserTokensRepository from '@modules/users/infra/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import IAddressRepository from '@modules/addresses/infra/repositories/IAddressRepository';
import AddressRepository from '@modules/addresses/infra/typeorm/repositories/AddressRepository';

import ICustomerRepository from '@modules/customers/infra/repositories/ICustomerRepository';
import CustomerRepository from '@modules/customers/infra/typeorm/repositories/CustomerRepository';

import ICategoryRepository from '@modules/products/infra/repositories/ICategoryRepository';
import CategoryRepository from '@modules/products/infra/typeorm/repositories/CategoryRepository';

import IRatingRepository from '@modules/products/infra/repositories/IRatingRepository';
import RatingRepository from '@modules/products/infra/typeorm/repositories/RatingRepository';
import IVariationRepository from '@modules/products/infra/repositories/IVariationRepository';
import VariationRepository from '@modules/products/infra/typeorm/repositories/VariationRepository';

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

container.registerSingleton<ICustomerRepository>(
  'CustomerRepository',
  CustomerRepository,
);

container.registerSingleton<ICategoryRepository>(
  'CategoryRepository',
  CategoryRepository,
);

container.registerSingleton<IRatingRepository>(
  'RatingRepository',
  RatingRepository,
);

container.registerSingleton<IVariationRepository>(
  'VariationRepository',
  VariationRepository,
);
