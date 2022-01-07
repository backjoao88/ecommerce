import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateShopService from '@modules/shops/services/CreateShopService';

export default class ShopController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name, cnpj, email, fone, address_id,
    } = request.body;

    const createShopService = container.resolve(CreateShopService);

    const newShop = await createShopService.execute({
      name, cnpj, email, fone, address_id,
    });

    return response.json(newShop);
  }
}
