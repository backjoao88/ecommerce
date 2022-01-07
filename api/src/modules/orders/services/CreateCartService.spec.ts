import FakeCartRepository from '@modules/orders/infra/repositories/fakes/FakeCartRepository';
import CreateCartService from '@modules/orders/services/CreateCartService';
import FakeCategoryRepository from '@modules/products/infra/repositories/fakes/FakeCategoryRepository';
import FakeProductRepository from '@modules/products/infra/repositories/fakes/FakeProductRepository';
import FakeVariationRepository from '@modules/products/infra/repositories/fakes/FakeVariationRepository';
import CreateCategoryService from '@modules/products/services/CreateCategoryService';
import CreateProductService from '@modules/products/services/CreateProductService';
import CreateVariationService from '@modules/products/services/CreateVariationService';

describe('CreateCart', () => {
  it('shoud be able to create a new cart', async () => {
    const fakeProductRepository = new FakeProductRepository();
    const fakeCategoryRepository = new FakeCategoryRepository();
    const createProductService = new CreateProductService(fakeProductRepository, fakeCategoryRepository);
    const createCategoryService = new CreateCategoryService(fakeCategoryRepository);
    const fakeVariationRepository = new FakeVariationRepository();
    const createVariationService = new CreateVariationService(fakeVariationRepository, fakeProductRepository);

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

    const variation = await createVariationService.execute({
      code: '1231',
      description: 'PRODUTO TESTE COR VERMELHA',
      price: 12.00,
      price_promotion: 10.00,
      quantity: 1000,
      product_id: product.id,
      shop_id: '1231312',
      blocked_quantity: 5,
      shipping_id: '',
    });

    const fakeCartRepository = new FakeCartRepository();

    const createCartService = new CreateCartService(fakeCartRepository, fakeVariationRepository);

    const cart = await createCartService.execute({
      quantity: 2,
      price_unitary: 2.00,
      product_id: product.id,
      variation_id: variation.id,
    });

    expect(cart).toHaveProperty('id');
  });
});
