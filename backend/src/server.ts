import dotenv from 'dotenv';
import express from 'express';

import routes from './routes';
import mongodb from './config/mongodb';

dotenv.config();

// Instância de Express
const app = express();

app.use(express.json());
app.use(routes);

// Conecta ao MongoDB
mongodb();

app.listen(3333);
