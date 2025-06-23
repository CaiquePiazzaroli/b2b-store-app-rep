const express = require("express");
const userController = require('../controller/userController');

const router = express.Router();

//GET ALL USERS 
router.get("/", function (req, res) {
  userController.getAllUsers(req, res);
});

//GET USER BY NAME
router.get("/:legalName/legalName", function (req, res) {
  const legalName = req.params.legalName;
  userController.getUserByName(req, res, legalName);
});

//Get USER BY ID
router.get("/:id/id", function (req, res) {
  const id = Number(req.params.id);
  userController.getUserById(req, res, id);
});

//POST USERS
  router.post("/", function (req, res) {
    userController.createuser(req, res);
});

//POST ITENS
router.put("/", function (req, res) {
    userController.updateUser(req, res);
});

//DELETE USER BY ID
router.delete("/:id/id", (req, res) => {
  const id = Number(req.params.id);
  userController.deleteUserById(req, res, id);
});

//Exporta o route para ser importado no app.js
module.exports = router;
