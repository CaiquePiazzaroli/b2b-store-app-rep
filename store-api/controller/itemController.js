const itemService = require("../service/itemService.js");


module.exports = {
  getAllItens: async (req, res) => {
    try {
      const query = await itemService.getAllItens();
      
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

  getItemByType: async (req, res, type) => {
    try {
      const query = await itemService.getItemByType(type);

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

  getItemById: async (req, res, idItem) => {
    try {
      const query = await itemService.getItemById(idItem);
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

  createItem: async (req, res) => {
    try {
      //Tenta salvar no banco de dados - Pode retornar um erro ou um json de sucesso
      const query = await itemService.createItem(req.body);

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

  updateItem: async (req, res) => {
    try {
      //Tenta salvar no banco de dados - Pode retornar um erro ou um json de sucesso
      const query = await itemService.updateItem(req.body);

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
  
  deleteItemById: async (req, res, id) => {
    try {
      const query = await itemService.deleteItemById(id);
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
