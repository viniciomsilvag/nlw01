import express from 'express';

// Instância de Express
const app = express();

// Rotas da aplicação
app.get('/users', (request, response) => {
  // Retorna JSON
  response.json(['Diego', 'Cleiton', 'Robson', 'Vinicio', 'Gabriel']);
});

app.listen(3333);
