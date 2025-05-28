//Importa o módulo express
const express = require('express')

//Importa os middlewares
const indexRouter = require('./routes/index.js');

//Cria um app
const app = express()

//Define a porta 
const port = 3001

//Utilizando os middlewares
app.use('/home', indexRouter);

//Roda o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`)
})