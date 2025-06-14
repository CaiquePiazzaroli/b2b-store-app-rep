const path = require("path");
const { Sequelize } = require("sequelize");
const Order = require("../database/models/order.js");
const ItemOrder = require("../database/models/item_order.js");
const { Op } = require('sequelize');

//Cria uma instância do banco de dados
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.resolve(__dirname, "../database/db.sqlite"), //__dirname variavel global que mostra a localização completa do arquivo atual
});

//Instancia o model passando a conexao do banco e o DataTypes
const OrderModel = Order(sequelize, Sequelize.DataTypes);
const ItemModel = ItemOrder(sequelize, Sequelize.DataTypes);

//Exportações
module.exports = {
  getAllOrders: async () => {
    try {
      //Tenta se autenticar
      await sequelize.authenticate();

      //Busca no banco
      const allOrders = await OrderModel.findAll();

      //Retorna os usuarios
      return allOrders;
    } catch (err) {
      throw err;
    }
  },

  getOrderById: async (id) => {
    //Realiza uma busca por id
    try {
      //Tenta se autenticar
      await sequelize.authenticate();

      //Busca no banco
      const orderSelectedById = await OrderModel.findByPk(id);

      if(orderSelectedById === null) throw new Error("Pedidos de venda não encontrado!");

      return orderSelectedById; //Retorna o pedido pelo nome
    } catch (err) {
      throw err;
    }
  },

  getOrderByUserId: async (userId) => {
    try {
      //Tenta se autenticar
      await sequelize.authenticate();

      //Busca no banco
      const orderSelectedById = await OrderModel.findAll({
        where: {
          id_user: {
            [Op.eq]: userId //Busca todos os pedidos de um usuario especifico
          },
        },
      });

      return orderSelectedById; //Retorna todos os pedidos do usuario
    } catch (err) {
      throw err;
    }
  },

  createOrder: async (orderObject) => {
    try {
      //Tenta se autenticar
      await sequelize.authenticate();

      //Exibe uma mensagem de sucesso
      console.log("Connection has been established successfully.");

      //Criando e inserindo um novo usuário no banco
      const newOrder = await OrderModel.create({
        id_user: orderObject.id_user,
        order_date: orderObject.order_date,
        total: orderObject.total,
      });

      return newOrder.toJSON();
    } catch (err) {
      throw err;
    }
  },
  
  deleteOrderById: async (id) => {
    //Realiza delete por id
    try {
      //Tenta se autenticar
      await sequelize.authenticate();

      //Deleta no banco
      const orderDeletedById = await OrderModel.destroy({
        where: {
          id: {
            [Op.eq]: id //Deleta apenas o valor do id equivalente
          },
        },
      });

      return orderDeletedById; //Retorna o usuario pelo nome
    } catch (err) {
      throw err;
    }
  }
};
