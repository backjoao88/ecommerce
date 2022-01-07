import FakeCategoryRepository from '../infra/repositories/fakes/FakeCategoryRepository';
import CreateCategoryService from './CreateCategoryService';

describe('UpdateCustomer', () => {
  it('shoud be able to create a category', async () => {
    const fakeCategoryRepository = new FakeCategoryRepository();
    const createCategoryService = new CreateCategoryService(fakeCategoryRepository);
    const category = await createCategoryService.execute({
      description: 'MATERIAIS ELÉTRICOS',
      code: '1231312',
      available: false,
    });
    expect(category).toHaveProperty('id');
  });
});
