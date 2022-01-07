import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import CustomerController from '@modules/customers/infra/http/controllers/CustomerController';
import ensureIsAuthenticated from '@modules/users/infra/http/middlewares/ensureIsAuthenticated';
import ensureIsAdmin from '@modules/users/infra/http/middlewares/ensureIsAdmin';

const customerRouter = Router();

const customerController = new CustomerController();

customerRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      birth_date: Joi.date(),
      cpf: Joi.string().required(),
      fone: Joi.string().required(),
      user_id: Joi.string().uuid().required(),
      address_id: Joi.string().uuid().required(),
      shop_id: Joi.string().uuid().required(),
    },
  }),
  customerController.create,
);

customerRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().uuid().required(),
      name: Joi.string(),
      birth_date: Joi.date(),
      cpf: Joi.string(),
      fone: Joi.string(),
      user_id: Joi.string().uuid(),
      address_id: Joi.string().uuid(),
      shop_id: Joi.string().uuid(),
    },
  }),
  customerController.update,
);

customerRouter.delete(
  '/',
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().uuid().required(),
    },
  }),
  customerController.delete,
);

customerRouter.get(
  '/',
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().uuid().required(),
    },
  }),
  customerController.show,
);

// Administrator routes

customerRouter.get(
  '/admin/:search',
  ensureIsAuthenticated,
  ensureIsAdmin,
  customerController.showAllByName,
);

export default customerRouter;
