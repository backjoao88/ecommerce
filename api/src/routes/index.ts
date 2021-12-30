import { Router } from 'express';
import userRouter from '../routes/api/v1/users';

const router = Router();

router.use('users', userRouter);

export default router;
