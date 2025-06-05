//Importa o módulo express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//Importa os middlewares
const usersRouter = require('./routes/users.js');

//Cria um app
const app = express();

//Define a porta 
const port = 8080;

// O CORS possibilita buscar dados de api no mesmo computador
app.use(cors());

//Rotas: utilizando os middlewares
app.use(bodyParser.json()); //Permite a transformação de json para objeto javascript
app.use('/users', usersRouter);

//Roda o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`)
})