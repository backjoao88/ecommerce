import { getRepository, Repository, Not } from 'typeorm';

import Rating from '../entities/Rating';
import ICreateRatingDTO from '../../dtos/ICreateRatingDTO';
import IRatingRepository from '../../repositories/IRatingRepository';

class RatingRepository implements IRatingRepository {
  private ormRepository: Repository<Rating>;

  constructor() {
    this.ormRepository = getRepository(Rating);
  }

  public async findByName(data: Rating): Promise<Rating | undefined> {
    const rating = await this.ormRepository.findOne(data.name);
    return rating;
  }

  public async delete(id: string): Promise<Rating | undefined> {
    const rating = this.findById(id);
    await this.ormRepository.delete(id);
    return rating;
  }

  public async findById(id: string): Promise<Rating | undefined> {
    const rating = await this.ormRepository.findOne(id);
    return rating;
  }

  public async create(userData: ICreateRatingDTO): Promise<Rating> {
    const rating = await this.ormRepository.create(userData);

    await this.ormRepository.save(rating);

    return rating;
  }

  public async save(rating: Rating): Promise<Rating> {
    return this.ormRepository.save(rating);
  }
}

export default RatingRepository;
