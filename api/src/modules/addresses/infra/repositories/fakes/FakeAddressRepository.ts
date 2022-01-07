import { uuid } from 'uuidv4';
import ICreateAddressDTO from '../../dtos/ICreateAddressDTO';
import IAddressRepository from '../IAddressRepository';

import Address from '../../typeorm/entities/Address';

class FakeAddressRepository implements IAddressRepository {
  private addresses: Address[] = [];

  save(data: Address): Promise<Address> {
    throw new Error('Method not implemented.');
  }

  public async findById(id: string): Promise<Address | undefined> {
    const filteredAddress = this.addresses.find((address) => address.id === id);
    return filteredAddress;
  }

  public async create(addressData: ICreateAddressDTO): Promise<Address> {
    const address = new Address();
    const newUser = Object.assign(address, { id: uuid() }, addressData);
    this.addresses.push(newUser);
    return address;
  }
}

export default FakeAddressRepository;
