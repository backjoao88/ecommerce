import { Router } from 'express';
import { Segments, Joi, celebrate } from 'celebrate';
import SessionController from '@modules/users/infra/http/controllers/SessionController';

const sessionsRouter = Router();
const sessionController = new SessionController();

sessionsRouter.post('/', celebrate({
  [Segments.BODY]: {
    email: Joi.string().required(),
    password: Joi.string().required(),
  },
}), sessionController.create);

export default sessionsRouter;
