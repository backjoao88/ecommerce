import Address from '../typeorm/entities/Address';
import ICreateAddressDTO from '../dtos/ICreateAddressDTO';

interface IAddressRepository {
  findById(id: string): Promise<Address | undefined>;
  create(data: ICreateAddressDTO): Promise<Address>;
  save(data: Address): Promise<Address>;
}

export default IAddressRepository;
