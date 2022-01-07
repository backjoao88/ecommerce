import FakeCategoryRepository from '../infra/repositories/fakes/FakeCategoryRepository';
import FakeProductRepository from '../infra/repositories/fakes/FakeProductRepository';
import CreateCategoryService from './CreateCategoryService';
import CreateProductService from './CreateProductService';

describe('UpdateCustomer', () => {
  it('shoud be able to create a category', async () => {
    const fakeProductRepository = new FakeProductRepository();
    const fakeCategoryRepository = new FakeCategoryRepository();
    const createProductService = new CreateProductService(fakeProductRepository, fakeCategoryRepository);
    const createCategoryService = new CreateCategoryService(fakeCategoryRepository);

    const category = await createCategoryService.execute({
      description: 'CATEGORIA01',
      code: '010100101',
      available: false,
    });

    const product = await createProductService.execute({
      price: 12.10,
      price_promotion: 0.00,
      sku: '123131',
      title: 'PRODUTO DE TESTE 01',
      shop_id: '1231321',
      category_id: category.id,
    });

    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('category_id');
  });
});
