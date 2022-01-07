import { uuid } from 'uuidv4';
import ICreateVariationDTO from '../../dtos/ICreateVariationDTO';
import Variation from '../../typeorm/entities/Variation';
import IVariationRepository from '../IVariationRepository';

class FakeVariationRepository implements IVariationRepository {
  private variations: Variation[] = [];

  public async findById(id: string): Promise<Variation | undefined> {
    const filteredCustomer = this.variations.find((u) => u.id === id);
    return filteredCustomer;
  }

  public async findByDescription(data: Variation): Promise<Variation | undefined> {
    const filteredCustomer = this.variations.find((u) => u.description === data.description);
    return filteredCustomer;
  }

  public async create(variationData: ICreateVariationDTO): Promise<Variation> {
    const rating = new Variation();
    const newVariation = Object.assign(rating, { id: uuid() }, variationData);
    this.variations.push(newVariation);
    return rating;
  }

  public async save(data: Variation): Promise<Variation> {
    const findIndex = this.variations.findIndex((d) => d.id === data.id);

    this.variations[findIndex] = data;

    return data;
  }

  delete(id: string): Promise<Variation> {
    const findIndex = this.variations.findIndex((d) => d.id === id);
    const newVariation = Object.assign(this.variations[findIndex]);
    this.variations.splice(findIndex, 1);
    return newVariation;
  }
}

export default FakeVariationRepository;
