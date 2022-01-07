import Customer from '../typeorm/entities/Customer';
import ICreateCustomerDTO from '../dtos/ICreateCustomerDTO';

interface ICustomerRepository {
  findById(id: string): Promise<Customer | undefined>;
  findByCpf(cpf: string): Promise<Customer | undefined>;
  findAllByName(data: Customer): Promise<Customer[] | undefined>;
  create(data: ICreateCustomerDTO): Promise<Customer>;
  save(data: Customer): Promise<Customer>;
  delete(id: string): Promise<Customer | undefined> ;
}

export default ICustomerRepository;
