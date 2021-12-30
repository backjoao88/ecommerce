import express from 'express';
import router from './routes/index'

const app = express();

app.get('/users', (req, res, next) => {
  return res.json({ err: 'Eu sou lindo' })
});

app.listen(3000, () => {
  console.log('Servidor escutando na porta 3000.');
});
