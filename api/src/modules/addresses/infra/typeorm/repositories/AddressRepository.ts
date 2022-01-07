import { getRepository, Repository, Not } from 'typeorm';

import IAddressRepository from '../../repositories/IAddressRepository';
import ICreateAddressDTO from '../../dtos/ICreateAddressDTO';

import Address from '../entities/Address';

class AddressRepository implements IAddressRepository {
  private ormRepository: Repository<Address>;

  constructor() {
    this.ormRepository = getRepository(Address);
  }

  public async findById(id: string): Promise<Address | undefined> {
    const address = await this.ormRepository.findOne(id);
    return address;
  }

  public async create(userData: ICreateAddressDTO): Promise<Address> {
    const address = await this.ormRepository.create(userData);

    await this.ormRepository.save(address);

    return address;
  }

  public async save(address: Address): Promise<Address> {
    return this.ormRepository.save(address);
  }
}

export default AddressRepository;
