import { getRepository, Repository, Not } from 'typeorm';
import { uuid } from 'uuidv4';
import ICustomerRepository from '@modules/customers/infra/repositories/ICustomerRepository';
import ICreateCustomerDTO from '@modules/customers/infra/dtos/ICreateCustomerDTO';

import Customer from '../../typeorm/entities/Customer';

class FakeCustomerRepository implements ICustomerRepository {
  private customers: Customer[] = [];

  public async findAllByName(data: Customer): Promise<Customer[] | undefined> {
    const filteredCustomer = this.customers.filter((u) => {
      if (u.name === data.name) {
        return u;
      }
    });
    return filteredCustomer;
  }

  public async findByCpf(cpf: string): Promise<Customer | undefined> {
    const filteredCustomer = this.customers.find((u) => u.cpf === cpf);
    return filteredCustomer;
  }

  public async findById(id: string): Promise<Customer | undefined> {
    const filteredCustomer = this.customers.find((u) => u.id === id);
    return filteredCustomer;
  }

  public async create(userData: ICreateCustomerDTO): Promise<Customer> {
    const customer = new Customer();
    const newCustomer = Object.assign(customer, { id: uuid() }, userData);
    this.customers.push(newCustomer);
    return customer;
  }

  public async save(data: Customer): Promise<Customer> {
    const findIndex = this.customers.findIndex((d) => d.id === data.id);

    this.customers[findIndex] = data;

    return data;
  }

  delete(id: string): Promise<Customer> {
    const findIndex = this.customers.findIndex((d) => d.id === id);
    const newCustomer = Object.assign(this.customers[findIndex]);
    this.customers.splice(findIndex, 1);
    return newCustomer;
  }
}

export default FakeCustomerRepository;
