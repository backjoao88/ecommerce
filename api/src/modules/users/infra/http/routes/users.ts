import { Router } from 'express';
import { Segments, Joi, celebrate } from 'celebrate';
import UserController from '@modules/users/infra/http/controllers/UserController';

const userRouter = Router();

const userController = new UserController();

userRouter.get(
  '/',
  celebrate({
    [Segments.BODY]: {
      id: Joi.string().required(),
    },
  }),
  userController.index,
);

userRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      permissions: Joi.string().required(),
      shop_id: Joi.string().uuid().required(),
    },
  }),
  userController.create,
);

userRouter.put('/', celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    old_password: Joi.string(),
    password: Joi.string(),
    password_confirmation: Joi.string().valid(Joi.ref('password')),
  },
}), userController.update);

export default userRouter;
