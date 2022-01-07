import { injectable, inject } from 'tsyringe';
import ApiException from '@shared/errors/ApiException';
import IUserRepository from '@modules/users/infra/repositories/IUserRepository';
import IAddressRepository from '@modules/addresses/infra/repositories/IAddressRepository';
import Customer from '../infra/typeorm/entities/Customer';
import ICustomerRepository from '../infra/repositories/ICustomerRepository';

interface IRequestDTO {
  id: string;
  name: string;
  birth_date: Date;
  cpf: string;
  fone: string;
  inactive: boolean;
  user_id: string;
  address_id: string;
  shop_id: string;
}

@injectable()
class UpdateCustomerService {
  constructor(
    @inject('CustomerRepository')
    private customersRepository: ICustomerRepository,

    @inject('UserRepository')
    private usersRepository: IUserRepository,

    @inject('UserRepository')
    private addressRepository: IAddressRepository,
  ) {}

  public async execute(customersData: IRequestDTO): Promise<Customer> {
    const customer = await this.customersRepository.findById(customersData.id);
    console.log(customersData.id);
    if (!customer) {
      throw new ApiException('Customer not found.');
    }

    const checkCpf = await this.customersRepository.findByCpf(customersData.cpf);

    if (checkCpf && checkCpf.id !== customersData.id) {
      throw new ApiException('This CPF is already used by another customer.');
    }

    customer.name = customersData.name;
    customer.cpf = customersData.cpf;
    customer.birth_date = customersData.birth_date;
    customer.fone = customersData.fone;
    customer.inactive = customersData.inactive;
    customer.shop_id = customersData.shop_id;
    customer.address_id = customersData.address_id;

    return this.customersRepository.save(customer);
  }
}

export default UpdateCustomerService;
