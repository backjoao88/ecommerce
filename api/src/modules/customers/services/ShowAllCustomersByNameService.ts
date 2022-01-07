import { injectable, inject } from 'tsyringe';
import ApiException from '@shared/errors/ApiException';
import Customer from '../infra/typeorm/entities/Customer';
import ICustomerRepository from '../infra/repositories/ICustomerRepository';

interface IRequestDTO {
  shop_id: string;
  name: string;
}

@injectable()
class ShowAllCustomersByNameService {
  constructor(
    @inject('CustomerRepository')
    private customersRepository: ICustomerRepository,
  ) {}

  public async execute(customersData: IRequestDTO): Promise<Customer[] | undefined> {
    const customer = new Customer();
    customer.shop_id = customersData.shop_id;
    customer.name = customersData.name;
    const customers = await this.customersRepository.findAllByName(customer);
    return customers;
  }
}

export default ShowAllCustomersByNameService;
