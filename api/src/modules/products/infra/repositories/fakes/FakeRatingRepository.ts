import { uuid } from 'uuidv4';
import ICreateRatingDTO from '../../dtos/ICreateRatingDTO';
import Rating from '../../typeorm/entities/Rating';
import IRatingRepository from '../IRatingRepository';

class FakeRatingRepository implements IRatingRepository {
  private ratings: Rating[] = [];

  public async findById(id: string): Promise<Rating | undefined> {
    const filteredCustomer = this.ratings.find((u) => u.id === id);
    return filteredCustomer;
  }

  public async findByName(data: Rating): Promise<Rating | undefined> {
    const filteredCustomer = this.ratings.find((u) => u.name === data.name);
    return filteredCustomer;
  }

  public async create(userData: ICreateRatingDTO): Promise<Rating> {
    const rating = new Rating();
    const newRating = Object.assign(rating, { id: uuid() }, userData);
    this.ratings.push(newRating);
    return rating;
  }

  public async save(data: Rating): Promise<Rating> {
    const findIndex = this.ratings.findIndex((d) => d.id === data.id);

    this.ratings[findIndex] = data;

    return data;
  }

  delete(id: string): Promise<Rating> {
    const findIndex = this.ratings.findIndex((d) => d.id === id);
    const newRating = Object.assign(this.ratings[findIndex]);
    this.ratings.splice(findIndex, 1);
    return newRating;
  }
}

export default FakeRatingRepository;
