import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import RatingController from '@modules/products/infra/http/controllers/RatingController';

const ratingRouter = Router();

const ratingController = new RatingController();

ratingRouter.post(
  '/',
  // ensureIsAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      text: Joi.string().required(),
      score: Joi.number().required(),
      product_id: Joi.string().uuid().required(),
      shop_id: Joi.string().uuid().required(),
    },
  }),
  ratingController.create,

);

export default ratingRouter;
