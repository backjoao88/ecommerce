import { injectable, inject } from 'tsyringe';
import ApiException from '@shared/errors/ApiException';
import Customer from '../infra/typeorm/entities/Customer';
import ICustomerRepository from '../infra/repositories/ICustomerRepository';

interface IRequestDTO {
  id: string;
}

@injectable()
class ShowCustomerService {
  constructor(
    @inject('CustomerRepository')
    private customersRepository: ICustomerRepository,
  ) {}

  public async execute(customersData: IRequestDTO): Promise<Customer | undefined> {
    const customer = await this.customersRepository.findById(customersData.id);

    if (!customer) {
      throw new ApiException('Customer not found.');
    }

    return customer;
  }
}

export default ShowCustomerService;
