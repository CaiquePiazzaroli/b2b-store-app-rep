const express = require('express');
const router = express.Router();

//Representa uma requisição ao banco de dados que retorna usuarios
const users = [
    {
        id: 1, 
        legal_name: "Jhon & Doe LTDA",
        trade_name: "TechInd",
        cnpj: "12345678000100",
        username: "jhond",
        password: "jhon97D0e",
        email:"jhon@email.com"
    },
    {
        id: 49, 
        legal_name: "KATHECH LTDA",
        trade_name: "KATHECH informática",
        cnpj: "1234588000654",
        username: "kathec",
        password: "k@thek1234",
        email:"kathech@email.com"
    }
];


//POST
router.post('/', function(req, res) {
    try {

        const user = users.find((user) => {
            return user.id === Number(req.body.id);
        });

        if(user !== undefined) {
            throw "Usuario já cadastrado";
        }

        users.push(req.body);

        res.status(201).json({message:"Created!"})
    } catch(err) {
        res.status(401).json({
            message: err
        })
    }
});


//GET ALL USERS
router.get('/', function(req, res) {
    res.json(users);
});


//Get USER BY ID
router.get('/:id/user', function(req, res) {
    try {
        const user = users.find((user) => {
            return user.id === Number(req.params.id);
        });
        if(!user) {
            throw "Not found 404"
        }
        res.status(200).json(user)

    } catch (err) {
        return res.status(404).json({
            message: err
        })
    }  
});   

//DELETE
router.delete('/:id/user', (req, res) => {
    try {

        //Busca o usuario na lista, retorna -1 se não encontrar
        const UserToDelete = users.findIndex((user) => user.id === Number(req.params.id));

        //Verifica se o usuário existe, se não retorna um user not found
        if(UserToDelete === -1) throw "User not found!"

        //Caso o usuário exista, remove ele da lista
        users.splice(UserToDelete, 1);

        //Envia uma mensagem de sucesso para o client
        res.status(200).json({
            message: "User deleted!"
        });
        
    } catch (err) {

        //Mensagem de erro caso o usuário não seja encontrado
        res.status(404).json({
            message: err
        });

    }
})

//Exporta o route para ser importado no app.js
module.exports = router;