import CreateRatingService from '@modules/products/services/CreateRatingService';
import { container } from 'tsyringe';
import { Request, Response } from 'express';

class RatingController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name, text, score, product_id, shop_id,
    } = request.body;

    const createRatingService = container.resolve(CreateRatingService);

    const newRating = await createRatingService.execute({
      name, text, score, product_id, shop_id,
    });

    return response.json(newRating);
  }
}

export default RatingController;
