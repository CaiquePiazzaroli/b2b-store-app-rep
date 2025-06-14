const express = require("express");
const orderController = require('../controller/orderController');

const router = express.Router();

//GET ALL ORDERS
router.get("/", function (req, res) {
  orderController.getAllOrders(req, res);
});

//GET ORDER BY ID
router.get("/:id/id", function (req, res) {
  const id = Number(req.params.id);
  orderController.getOrderById(req, res, id);
});

//GET ORDER BY USER ID
router.get("/:id/userid", function (req, res) {
  const id = Number(req.params.id);
  orderController.getOrderByUserId(req, res, id);
});

//POST ORDER
router.post("/", function (req, res) {
    orderController.createOrder(req, res);
});

//DELETE ORDER BY ID
router.delete("/:id/id", (req, res) => {
  const id = Number(req.params.id);
  orderController.deleteOrderById(req, res, id);
});

//Exporta o router para ser importado no app.js
module.exports = router;
