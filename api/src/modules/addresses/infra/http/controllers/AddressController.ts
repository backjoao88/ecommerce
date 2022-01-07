import { container } from 'tsyringe';
import { Request, Response } from 'express';
import CreateAddressService from '../../../services/CreateAddressService';

export default class AddressController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name, district, number, complement, city, cep,
    } = request.body;
    const createAddress = container.resolve(CreateAddressService);
    const newAddress = await createAddress.execute({
      name, district, number, complement, city, cep,
    });
    return response.json(newAddress);
  }
}
