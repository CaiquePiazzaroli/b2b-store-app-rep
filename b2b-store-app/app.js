//Importa o módulo express
const express = require('express')

//Cria um app
const app = express()

//Define a porta 
const port = 3000

//Define um endpoint que retorna uma mensagem
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Roda o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`)
})