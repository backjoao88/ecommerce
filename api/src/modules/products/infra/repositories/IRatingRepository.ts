import Rating from '@modules/products/infra/typeorm/entities/Rating';
import ICreateRatingDTO from '../dtos/ICreateRatingDTO';

interface IRatingRepository{
  findById(id: string): Promise<Rating | undefined>;
  findByName(data: Rating): Promise<Rating | undefined>;
  create(data: ICreateRatingDTO): Promise<Rating>;
  save(data: Rating): Promise<Rating>;
  delete(id: string): Promise<Rating | undefined> ;
}

export default IRatingRepository;
