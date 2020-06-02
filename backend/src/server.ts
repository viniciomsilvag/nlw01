/* eslint-disable import/no-unresolved */
import express from 'express';

// eslint-disable-next-line import/extensions
import routes from './routes';

// Instância de Express
const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
