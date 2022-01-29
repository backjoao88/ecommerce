import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ShopController from '@modules/shops/infra/http/controllers/ShopController';
import ensureIsAuthenticated from '@modules/users/infra/http/middlewares/ensureIsAuthenticated';
import ensureIsAdmin from '@modules/users/infra/http/middlewares/ensureIsAdmin';

const shopRouter = Router();

const shopController = new ShopController();

shopRouter.post(
  '/',
  // ensureIsAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      cnpj: Joi.string().required(),
      email: Joi.string().email().required(),
      fone: Joi.string().required(),
      address_id: Joi.string().uuid().required(),
    },
  }),
  shopController.create,
);

export default shopRouter;
