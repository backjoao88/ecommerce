import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes//users';
import sessionsRouter from '@modules/users/infra/http/routes/sessions';
import passwordRouter from '@modules/users/infra/http/routes/password';
import shopsRouter from '@modules/shops/infra/http/routes/shops';
import addressesRouter from '@modules/addresses/infra/http/routes/addresses';
import categoriesRouter from '@modules/products/infra/http/routes/categories';
import productsRouter from '@modules/products/infra/http/routes/products';

// import customersRouter from '@modules/customers/infra/http/routes/customers';
// import ratingsRouter from '@modules/products/infra/http/routes/ratings';
// import variationsRouter from '@modules/products/infra/http/routes/variations';
// import ordersRouter from '@modules/orders/infra/http/routes/orders';
// import paymentsRouter from '@modules/orders/infra/http/routes/payments';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/addresses', addressesRouter);
routes.use('/shops', shopsRouter);
routes.use('/categories', categoriesRouter);
routes.use('/products', productsRouter);

// DESATIVADAS NO MOMENTO

// routes.use('/customers', customersRouter);
// routes.use('/ratings', ratingsRouter);
// routes.use('/variations', variationsRouter);
// routes.use('/payments', paymentsRouter);
// routes.use('/orders', ordersRouter);

export default routes;
