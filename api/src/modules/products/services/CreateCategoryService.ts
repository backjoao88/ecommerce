import { inject, injectable } from 'tsyringe';
import ICategoryRepository from '../infra/repositories/ICategoryRepository';
import Category from '../infra/typeorm/entities/Category';

interface IRequestDTO {
  description: string;
  code: string;
  available: boolean;
}

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  public async execute(categoryData: IRequestDTO): Promise<Category> {
    const response = await this.categoryRepository.create({
      description: categoryData.description,
      code: categoryData.code,
      available: categoryData.available,
    });
    return response;
  }
}

export default CreateCategoryService;
