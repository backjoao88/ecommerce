import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes//users';
import sessionsRouter from '@modules/users/infra/http/routes/sessions';
import passwordRouter from '@modules/users/infra/http/routes/password';
import shopsRouter from '@modules/shops/infra/http/routes/shops';
import addressesRouter from '@modules/shops/infra/http/routes/addresses';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/shops', shopsRouter);
routes.use('/addresses', addressesRouter);

export default routes;
