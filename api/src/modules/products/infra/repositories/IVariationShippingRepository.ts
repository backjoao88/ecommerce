import VariationShipping from '@modules/products/infra/typeorm/entities/VariationShipping';
import ICreateVariationShippingDTO from '../dtos/ICreateVariationShippingDTO';

interface IVariationShippingRepository{
  findById(id: string): Promise<VariationShipping | undefined>;
  create(data: ICreateVariationShippingDTO): Promise<VariationShipping>;
  save(data: VariationShipping): Promise<VariationShipping>;
  delete(id: string): Promise<VariationShipping | undefined> ;
}

export default IVariationShippingRepository;
