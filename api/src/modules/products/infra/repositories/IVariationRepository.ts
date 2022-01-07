import Variation from '@modules/products/infra/typeorm/entities/Variation';
import ICreateVariationDTO from '../dtos/ICreateVariationDTO';

interface IVariationRepository{
  findById(id: string): Promise<Variation | undefined>;
  findByDescription(data: Variation): Promise<Variation | undefined>;
  create(data: ICreateVariationDTO): Promise<Variation>;
  save(data: Variation): Promise<Variation>;
  delete(id: string): Promise<Variation | undefined> ;
}

export default IVariationRepository;
