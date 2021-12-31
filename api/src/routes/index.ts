import { Router } from 'express';
import userRouter from './api/v1/users';
import sessionRouter from './api/v1/sessions';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/sessions', sessionRouter);

export default routes;
