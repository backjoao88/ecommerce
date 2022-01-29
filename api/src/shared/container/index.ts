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

import IProductRepository from '@modules/products/infra/repositories/IProductRepository';
import ProductRepository from '@modules/products/infra/typeorm/repositories/ProductRepository';

import IVariationShippingRepository from '@modules/products/infra/repositories/IVariationShippingRepository';
import VariationShippingRepository from '@modules/products/infra/typeorm/repositories/VariationShippingRepository';
import IPaymentRepository from '@modules/orders/infra/repositories/IPaymentRepository';
import PaymentRepository from '@modules/orders/infra/typeorm/repositories/PaymentRepository';

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

container.registerSingleton<IProductRepository>(
  'ProductRepository',
  ProductRepository,
);

container.registerSingleton<IRatingRepository>(
  'RatingRepository',
  RatingRepository,
);

container.registerSingleton<IVariationRepository>(
  'VariationRepository',
  VariationRepository,
);

container.registerSingleton<IVariationShippingRepository>(
  'VariationShippingRepository',
  VariationShippingRepository,
);

container.registerSingleton<IPaymentRepository>(
  'PaymentRepository',
  PaymentRepository,
);
