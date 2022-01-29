import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import OrderController from '@modules/orders/infra/http/controllers/OrderController';

const orderRouter = Router();

const orderController = new OrderController();

orderRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      code: Joi.number().required(),
      total_price: Joi.number().required(),
      total_price_promotion: Joi.number().required(),
      customer_id: Joi.string().uuid().required(),
      payment_id: Joi.string().uuid().required(),
      shipping_id: Joi.string().uuid().required(),
    },
  }),
  orderController.create,
);

export default orderRouter;
