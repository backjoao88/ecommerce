import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ProductController from '../controllers/ProductController';
import ensureIsAuthenticated from '@modules/users/infra/http/middlewares/ensureIsAuthenticated';
import ensureIsAdmin from '@modules/users/infra/http/middlewares/ensureIsAdmin';

const productRouter = Router();

const productController = new ProductController();

productRouter.post(
  '/',
  ensureIsAuthenticated,
  ensureIsAdmin,
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.number().required(),
      price_promotion: Joi.number().required(),
      sku: Joi.string().required(),
      category_id: Joi.string().uuid().required(),
      shop_id: Joi.string().uuid().required(),
    },
  }),
  productController.create,
);

productRouter.get(
  '/',
  ensureIsAuthenticated,
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().uuid().required(),
    },
  }),
  productController.show,
);

export default productRouter;
