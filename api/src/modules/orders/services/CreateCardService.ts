import { injectable, inject } from 'tsyringe';
import Card from '@modules/orders/infra/typeorm/entities/Card';
import ICardRepository from '@modules/orders/infra/repositories/ICardRepository';

interface IRequestDTO {
  name: string;
  areaCode: string;
  cpf: string;
  fone: string;
  token: string;
  birthDate: Date;
}

@injectable()
class CreateCardService {
  constructor(
    @inject('CardRepository')
    private cardRepository: ICardRepository,
  ) {}

  public async execute(cardData: IRequestDTO): Promise<Card> {
    const response = await this.cardRepository.create({
      name: cardData.name,
      areaCode: cardData.areaCode,
      cpf: cardData.cpf,
      fone: cardData.fone,
      token: cardData.token,
      birthDate: cardData.birthDate,
    });

    return response;
  }
}

export default CreateCardService;
