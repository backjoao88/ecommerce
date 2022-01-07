import { injectable, inject } from 'tsyringe';
import ApiException from '@shared/errors/ApiException';
import IUserRepository from '@modules/users/infra/repositories/IUserRepository';
import IAddressRepository from '@modules/addresses/infra/repositories/IAddressRepository';
import Customer from '../infra/typeorm/entities/Customer';
import ICustomerRepository from '../infra/repositories/ICustomerRepository';

interface IRequestDTO {
  name: string;
  birth_date: Date;
  cpf: string;
  fone: string;
  user_id: string;
  address_id: string;
  shop_id: string;
}

@injectable()
class CreateCustomerService {
  constructor(
    @inject('CustomerRepository')
    private customersRepository: ICustomerRepository,

    @inject('UserRepository')
    private usersRepository: IUserRepository,

    @inject('AddressRepository')
    private addressRepository: IAddressRepository,
  ) {}

  public async execute(customersData: IRequestDTO): Promise<Customer> {
    const checkSameCpf = await this.customersRepository.findByCpf(customersData.cpf);

    if (checkSameCpf) {
      throw new ApiException('CPF already registered');
    }

    const user = await this.usersRepository.findById(customersData.user_id);

    if (!user) {
      throw new ApiException('User not found');
    }

    const address = await this.addressRepository.findById(customersData.address_id);

    if (!address) {
      throw new ApiException('Address not found');
    }

    const response = await this.customersRepository.create({
      name: customersData.name,
      cpf: customersData.cpf,
      birth_date: customersData.birth_date,
      fone: customersData.fone,
      inactive: false,
      user_id: customersData.user_id,
      address_id: customersData.address_id,
      shop_id: customersData.shop_id,
    });

    return response;
  }
}

export default CreateCustomerService;
