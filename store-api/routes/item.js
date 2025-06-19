const express = require("express");
const itemController = require('../controller/itemController');

const router = express.Router();

//GET ALL ITENS
router.get("/", function (req, res) {
  itemController.getAllItens(req, res);
});

//GET ITENS BY TYPE
router.get("/:type/type", function (req, res) {
  const type = req.params.type;
  itemController.getItemByType(req, res, type);
});

//Get ITEM BY ID
router.get("/:id/id", function (req, res) {
  const id = Number(req.params.id);
  itemController.getItemById(req, res, id);
});

//POST ITENS
router.post("/", function (req, res) {
    itemController.createItem(req, res);
});

//POST ITENS
router.put("/", function (req, res) {
    itemController.updateItem(req, res);
});

//DELETE ITEM BY ID
router.delete("/:id/id", (req, res) => {
  const id = Number(req.params.id);
  itemController.deleteItemById(req, res, id);
});

//Exporta o route para ser importado no app.js
module.exports = router;
