import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import handleErrors from '@shared/infra/http/middlewares/handleErrors';
import routes from '@shared/infra/http/routes';
import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(handleErrors);

app.listen(3000, () => {
  console.log('> The server is listening on port 3000');
});
