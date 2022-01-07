import { injectable, inject } from 'tsyringe';
import ApiException from '@shared/errors/ApiException';
import Shop from '@modules/shops/infra/typeorm/entities/Shop';
import IShopRepository from '@modules/shops/infra/repositories/IShopRepository';

interface IRequestDTO {
  name: string;
  cnpj: string;
  email: string;
  fone: string;
  address_id: string;
}

@injectable()
class CreateShopService {
  constructor(
    @inject('ShopRepository')
    private shopRepository: IShopRepository,
  ) {}

  public async execute(shopData: IRequestDTO): Promise<Shop> {
    const checkSameCnpj = await this.shopRepository.findByCnpj(shopData.cnpj);

    if (checkSameCnpj) {
      throw new ApiException('CNPJ already registered');
    }

    const response = await this.shopRepository.create({
      name: shopData.name,
      cnpj: shopData.cnpj,
      email: shopData.email,
      fone: shopData.fone,
      address_id: shopData.address_id,
    });

    return response;
  }
}

export default CreateShopService;
