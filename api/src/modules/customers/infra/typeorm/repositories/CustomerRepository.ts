import { getRepository, Like, Repository } from 'typeorm';

import ICreateCustomerDTO from '../../dtos/ICreateCustomerDTO';
import ICustomerRepository from '../../repositories/ICustomerRepository';

import Customer from '../entities/Customer';

class CustomerRepository implements ICustomerRepository {
  private ormRepository: Repository<Customer>;

  constructor() {
    this.ormRepository = getRepository(Customer);
  }

  public async findAllByName(data: Customer): Promise<Customer[] | undefined> {
    const customers = await this.ormRepository.find({
      where: {
        shop_id: data.shop_id,
        name: Like(`%${data.name}%`),
      },
    });
    return customers;
  }

  public async delete(id: string): Promise<Customer | undefined> {
    const customer = this.findById(id);
    await this.ormRepository.delete(id);
    return customer;
  }

  public async findByCpf(cpf: string): Promise<Customer | undefined> {
    const customer = await this.ormRepository.findOne({
      where: { cpf },
    });
    return customer;
  }

  public async findById(id: string): Promise<Customer | undefined> {
    const customer = await this.ormRepository.findOne(id);
    return customer;
  }

  public async create(userData: ICreateCustomerDTO): Promise<Customer> {
    const customer = this.ormRepository.create(userData);

    await this.ormRepository.save(customer);

    return customer;
  }

  public async save(customer: Customer): Promise<Customer> {
    return this.ormRepository.save(customer);
  }
}

export default CustomerRepository;
