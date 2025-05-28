//Importa o express
const express = require('express');

//Importa o router
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.send("Index carregado");
});

/* Utilizando o id passado na URL */
router.get('/usuario/:id', function(req, res) {
    res.json({
        id: `${req.params.id}`,
        name: "caique"
    });
});   

//Exporta o route para ser importado no app.js
module.exports = router;