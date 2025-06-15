//Ajuda a trabalhar com operações de consulta como: Select * WHERE name LIKE "xxx"
const { Op } = require('sequelize');

//Importa db da pasta módels do arquivo index.js
const db = require("../database/models");

//Importa os modelos do banco de dados, isso é importante para que as consultas funcionem bem
const { Order, Item, ItemOrder } = db;

module.exports = {

  //Retorna todas as Orders
  getAllOrders: async () => {
    try {
      const allOrders = await Order.findAll();
      return allOrders;
    } catch (err) {
      throw err;
    }
  },

  //Retorna uma order pelo id
  getOrderById: async (id) => {
    try {
      const orderSelectedById = await Order.findByPk(id, {
        //Isso serve para que ele retorne todos os itens do pedido
        // na tabela Item
        include: [
          {
            model: Item,
            as: 'items', // Usa o alias definido na associação (hasMany ou belongsToMany)
            through: {
              attributes: ['quantity'], // traz apenas o campo 'quantity' da tabela ItemOrder
            },
            // Quais campos desejo trazer da tabela Item
            attributes: ['id', 'type', 'description', 'imagePath', 'value'],
          },
        ],
      });

      //Retorna um erro caso o pedido nao exista
      if (!orderSelectedById) throw new Error("Pedido não encontrado!");

      //Retorna o pedido
      return orderSelectedById;
    } catch (err) {
      throw err;
    }
  },

  getOrderByUserId: async (userId) => {
    try {
      const orderSelectedById = await Order.findAll({
        where: {
          id_user: {
            [Op.eq]: userId,
          },
        },
      });

      return orderSelectedById;
    } catch (err) {
      throw err;
    }
  },

  createOrder: async (orderObject) => {
    // Inicia uma transação no banco de dados
    const transaction = await db.sequelize.transaction();

    try {
      //Cria no banco um pedido novo a partir do objeto orderObjetct
      const newOrder = await Order.create(
        {
          id_user: orderObject.id_user,
          order_date: orderObject.order_date,
          total: orderObject.total,
        },
        { transaction }
      );

      //Prepara o array de produtos do pedido para serem adicionados no banco
      const itemsToInsert = orderObject.items.map((item) => ({
        order_id: newOrder.id,
        item_id: item.id_item,
        quantity: item.quantity,
      }));

      // Insere todos os itens do pedido na tabela 'ItemOrder' de uma só vez
      await ItemOrder.bulkCreate(itemsToInsert, { transaction });

      //Salva no banco
      await transaction.commit();

      return newOrder.toJSON();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  deleteOrderById: async (id) => {
    try {
      const orderDeletedById = await Order.destroy({
        where: {
          id: {
            [Op.eq]: id,
          },
        },
      });

      return orderDeletedById;
    } catch (err) {
      throw err;
    }
  },
};
