import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import VariationController from '../controllers/VariationController';

const variationRouter = Router();

const variationController = new VariationController();

variationRouter.post(
  '/',
  // ensureIsAuthenticated,
  celebrate({
    [Segments.BODY]: {
      code: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.number().required(),
      price_promotion: Joi.number().required(),
      quantity: Joi.number().required(),
      blocked_quantity: Joi.number().required(),
      depth_cm: Joi.number().required(),
      width_cm: Joi.number().required(),
      height_cm: Joi.number().required(),
      weight_kg: Joi.number().required(),
      free_shipping: Joi.boolean().required(),
      product_id: Joi.string().uuid().required(),
      shop_id: Joi.string().uuid().required(),
    },
  }),
  variationController.create,

);

export default variationRouter;
