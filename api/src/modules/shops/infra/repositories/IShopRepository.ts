import Shop from '../typeorm/entities/Shop';
import ICreateUserDTO from '../dtos/ICreateShopDTO';

interface IShopRespository {
  findByCnpj(cnpj: string): Promise<Shop | undefined>;
  findById(id: string): Promise<Shop | undefined>;
  create(data: ICreateUserDTO): Promise<Shop>;
  save(data: Shop): Promise<Shop>;
}

export default IShopRespository;
