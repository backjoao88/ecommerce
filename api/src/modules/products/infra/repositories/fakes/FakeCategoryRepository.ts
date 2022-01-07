import { uuid } from 'uuidv4';
import ICreateCategoryDTO from '../../dtos/ICreateCategoryDTO';
import Category from '../../typeorm/entities/Category';
import ICategoryRepository from '../ICategoryRepository';

class FakeCategoryRepository implements ICategoryRepository {
  private categories: Category[] = [];

  public async findById(id: string): Promise<Category | undefined> {
    const filteredCustomer = this.categories.find((u) => u.id === id);
    return filteredCustomer;
  }

  public async findByDescription(data: Category): Promise<Category | undefined> {
    const filteredCustomer = this.categories.find((u) => u.description === data.description);
    return filteredCustomer;
  }

  public async create(userData: ICreateCategoryDTO): Promise<Category> {
    const category = new Category();
    const newCategory = Object.assign(category, { id: uuid() }, userData);
    this.categories.push(newCategory);
    return category;
  }

  public async save(data: Category): Promise<Category> {
    const findIndex = this.categories.findIndex((d) => d.id === data.id);

    this.categories[findIndex] = data;

    return data;
  }

  public async delete(id: string): Promise<Category> {
    const findIndex = this.categories.findIndex((d) => d.id === id);
    const newCategory = Object.assign(this.categories[findIndex]);
    this.categories.splice(findIndex, 1);
    return newCategory;
  }
}

export default FakeCategoryRepository;
