import { injectable, inject } from 'tsyringe';
import Address from '../infra/typeorm/entities/Address';
import IAddressRepository from '../infra/repositories/IAddressRepository';

interface IRequestDTO {
  name: string;
  district: string;
  number: string;
  complement: string;
  city: string;
  cep: string;
}

@injectable()
class CreateAddressService {
  constructor(
    @inject('AddressRepository')
    private addressRepository: IAddressRepository,
  ) {}

  public async execute(addressData: IRequestDTO): Promise<Address> {
    const response = await this.addressRepository.create({
      name: addressData.name,
      district: addressData.district,
      number: addressData.number,
      complement: addressData.complement,
      city: addressData.city,
      cep: addressData.cep,
    });

    return response;
  }
}

export default CreateAddressService;
