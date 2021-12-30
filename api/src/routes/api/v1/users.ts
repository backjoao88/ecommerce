import { Router } from 'express';

const userRouter = Router()

userRouter.get('/', (req, res, next) => {
  return res.json({ msg: 'Eu sou lindo.' });
});

export default userRouter;
