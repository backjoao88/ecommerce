import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import CategoryController from '@modules/products/infra/http/controllers/CategoryController';

const categoryRouter = Router();

const categoryController = new CategoryController();

categoryRouter.post(
  '/',
  // ensureIsAuthenticated,
  celebrate({
    [Segments.BODY]: {
      description: Joi.string().required(),
      code: Joi.string().required(),
      available: Joi.boolean().required(),
    },
  }),
  categoryController.create,
);

export default categoryRouter;
