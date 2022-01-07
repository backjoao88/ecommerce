import FakeCategoryRepository from '../infra/repositories/fakes/FakeCategoryRepository';
import FakeProductRepository from '../infra/repositories/fakes/FakeProductRepository';
import FakeRatingRepository from '../infra/repositories/fakes/FakeRatingRepository';
import CreateCategoryService from './CreateCategoryService';
import CreateProductService from './CreateProductService';
import CreateRatingService from './CreateRatingService';

describe('UpdateCustomer', () => {
  it('shoud be able to create a rating', async () => {
    const fakeProductRepository = new FakeProductRepository();
    const fakeCategoryRepository = new FakeCategoryRepository();
    const createProductService = new CreateProductService(fakeProductRepository, fakeCategoryRepository);
    const createCategoryService = new CreateCategoryService(fakeCategoryRepository);
    const fakeRatingRepository = new FakeRatingRepository();
    const createRatingService = new CreateRatingService(fakeRatingRepository, fakeProductRepository);

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

    const rating = await createRatingService.execute({
      name: 'AVALIACAO01',
      text: 'MUITO RUIM',
      score: 1,
      product_id: product.id,
      shop_id: '231312',
    });

    expect(rating).toHaveProperty('id');
    expect(rating).toHaveProperty('product_id');
  });
});
