import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import AddressController from '../controllers/AddressController';

const addressRouter = Router();

const addressController = new AddressController();

addressRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      number: Joi.string().required(),
      district: Joi.string().required(),
      complement: Joi.string().required(),
      city: Joi.string().required(),
      cep: Joi.string().required(),
    },
  }),
  addressController.create,
);

export default addressRouter;
