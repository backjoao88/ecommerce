import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import PaymentController from '@modules/orders/infra/http/controllers/PaymentController';

const paymentRouter = Router();

const paymentController = new PaymentController();

paymentRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      amount: Joi.number().required(),
      installments: Joi.number().required(),
      status: Joi.string().required(),
      type: Joi.string().required(),
      card_id: Joi.string().uuid(),
    },
  }),
  paymentController.create,
);

export default paymentRouter;
