const orderService = require("../service/orderService.js");


module.exports = {
  getAllOrders: async (req, res) => {
    try {
      const query = await orderService.getAllOrders();
      
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
  getOrderById: async (req, res, id) => {
    try {
      const query = await orderService.getOrderById(id);
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

  getOrderByUserId: async (req, res, idUser) => {
    try {
      const query = await orderService.getOrderByUserId(idUser);
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

  createOrder: async (req, res) => {
    try {
      //Tenta salvar no banco de dados - Pode retornar um erro ou um json de sucesso
      const query = await orderService.createOrder(req.body);

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

  updateOrderById: async (req, res) => {
  try {
    const id = req.params.id;               // pega o id da URL
    const updatedOrder = req.body;          // corpo do pedido atualizado

    const result = await orderService.updateOrderById(id, updatedOrder);

    res.status(200).json(result);           // 200 para atualização bem sucedida
  } catch (err) {
    res.status(400).json({
      message: "Error",
      details: err.message || err,
    });
  }
},
  
  deleteOrderById: async (req, res, id) => {
    try {
      const query = await orderService.deleteOrderById(id);
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
