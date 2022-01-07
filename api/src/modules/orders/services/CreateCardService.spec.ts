import FakeCardRepository from '@modules/orders/infra/repositories/fakes/FakeCardRepository';
import CreateCardService from '@modules/orders/services/CreateCardService';

describe('CreateCard', () => {
  it('shoud be able to create a new card', async () => {
    const fakeCardRepository = new FakeCardRepository();
    const createCardService = new CreateCardService(fakeCardRepository);
    const card = await createCardService.execute({
      name: 'test card',
      birthDate: new Date(),
      cpf: '11154328937',
      token: '1341233121',
      fone: '123132321',
      areaCode: '123',
    });
    expect(card).toHaveProperty('id');
  });
});
