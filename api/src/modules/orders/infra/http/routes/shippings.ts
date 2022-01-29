import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ShippingController from '@modules/orders/infra/http/controllers/ShippingController';

const shippingRouter = Router();

const shippingController = new ShippingController();

shippingRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      status: Joi.string().required(),
      tracking_code: Joi.string().required(),
      type: Joi.string().required(),
      cost: Joi.number().required(),
      deadline: Joi.number().required(),
      address_id: Joi.string().uuid().required(),
      order_id: Joi.string().uuid().required(),
      shop_id: Joi.string().uuid().required(),
    },
  }),
  shippingController.create,
);

export default shippingRouter;
