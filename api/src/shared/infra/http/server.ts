import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import { errors } from 'celebrate';
import 'express-async-errors';
import routes from '@shared/infra/http/routes';
import errorMiddleware from './middlewares/handleErrors';
import '@shared/infra/typeorm';
import '@shared/container';
import '@shared/container/providers';
import '@modules/users/providers/HashProvider';

const app = express();

app.use(cors());
app.use(express.json());
app.use(errors());
app.use(routes);
app.use(errorMiddleware);

app.listen(3000, () => {
  console.log('> The server is listening on port 3000');
});
