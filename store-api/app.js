//Importa o módulo express
const express = require('express');

//Importa os middlewares
const usersRouter = require('./routes/users.js');

//Cria um app
const app = express()

//Define a porta 
const port = 3001

//Rotas: utilizando os middlewares
app.use('/users', usersRouter);

//Roda o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`)
})