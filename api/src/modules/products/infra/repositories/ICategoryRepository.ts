import Category from '@modules/products/infra/typeorm/entities/Category';
import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO';

interface ICategoryRepository{
  findById(id: string): Promise<Category | undefined>;
  findByDescription(data: Category): Promise<Category | undefined>;
  create(data: ICreateCategoryDTO): Promise<Category>;
  save(data: Category): Promise<Category>;
  delete(id: string): Promise<Category | undefined> ;
}

export default ICategoryRepository;
