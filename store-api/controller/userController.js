const userService = require("../service/userService.js");


module.exports = {
  createuser: async (req, res) => {
    try {
      //Tenta salvar no banco de dados - Pode retornar um erro ou um json de sucesso
      const query = await userService.createUser(req.body);

      //Executa se sucesso
      res.status(201).json(query);
    } catch (err) {
      //Executa se erro
      res.status(400).json({
        message: "Error",
        details: err.message || err, 
      });
    }
  },
  updateUser: async (req, res) => {
    try {
      //Tenta salvar no banco de dados - Pode retornar um erro ou um json de sucesso
      const query = await userService.updateUser(req.body);

      //Executa se sucesso
      res.status(201).json(query);
    } catch (err) {
      //Executa se erro
      res.status(400).json({
        message: "Error",
        details: err.message || err, 
      });
    }
  },
  
  getAllUsers: async (req, res) => {
    try {
      const query = await userService.getAllUsers();
      
      //Executa se sucesso
      res.status(200).json(query);
    } catch (err) {
      //Executa se erro
      res.status(400).json({
        message: "Error",
        details: err.message || err, 
      });
    } 
  },
  getUserById: async (req, res, id) => {
    try {
      const query = await userService.getUserById(id);
      //Executa se sucesso
      res.status(200).json(query)
    } catch (err) {
      //Executa se erro
      res.status(400).json({
        message: "Error",
        details: err.message || err, 
      });
    }
  },
  getUserByName: async (req, res, legalName) => {
    try {
      const query = await userService.getUserByName(legalName);
      //Executa se sucesso
      res.status(200).json(query)
    } catch (err) {
      //Executa se erro
      res.status(400).json({
        message: "Error",
        details: err.message || err, 
      });
    }
  },
  
  deleteUserById: async (req, res, id) => {
    try {
      const query = await userService.deleteUserById(id);
      //Executa se sucesso
      res.status(200).json({
        message: "Deleted!"
      });
    } catch (err) {
      //Executa se erro
      res.status(400).json({
        message: "Error",
        details: err.message || err, 
      });
    }
  }
};
