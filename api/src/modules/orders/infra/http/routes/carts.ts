import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import CartController from '@modules/orders/infra/http/controllers/CartController';

const cartRouter = Router();

const cartController = new CartController();

cartRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      quantity: Joi.number().required(),
      price_unitary: Joi.number().required(),
      variation_id: Joi.string().uuid().required(),
    },
  }),
  cartController.create,
);

export default cartRouter;
