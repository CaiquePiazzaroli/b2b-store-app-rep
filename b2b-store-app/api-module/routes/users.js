const express = require('express');
const router = express.Router();

//Representa uma requisição ao banco de dados que retorna usuarios
const data = [{id: 0,name: "caique"}, {id: 1,name: "Joao"}];

//Requisições HTTP

router.get('/', function(req, res) {
    res.json(data);
});

router.get('/:id', function(req, res) {
    res.json(data[Number(req.params.id)]);
});   

//Exporta o route para ser importado no app.js
module.exports = router;