import { Router } from 'express';
import UserController from '@modules/users/infra/http/controllers/UserController';

const userRouter = Router();

const userController = new UserController();

userRouter.get('/', userController.index);
userRouter.post('/', userController.create);
userRouter.put('/', userController.update);

export default userRouter;
