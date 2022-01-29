import ApiException from '@shared/errors/ApiException';
import { id } from 'date-fns/locale';
import { injectable, inject } from 'tsyringe';
import ICategoryRepository from '../infra/repositories/ICategoryRepository';
import Category from '../infra/typeorm/entities/Category';

interface IRequestDTO{
  id: string;
}

@injectable()
class ShowCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ) {}

  public async execute(categoryData: IRequestDTO): Promise<Category> {
    const category = await this.categoryRepository.findById(categoryData.id);

    if (!category) {
      throw new ApiException('Category not found');
    }

    return category;
  }
}

export default ShowCategoryService;
