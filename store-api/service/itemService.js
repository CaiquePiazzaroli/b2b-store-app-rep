const { Op } = require('sequelize');
const db = require("../database/models");

const { Item } = db;

//Exportações
module.exports = {
  getAllItens: async () => {
    try {

      //Busca no banco
      const allItens = await Item.findAll();

      //Retorna os usuarios
      return allItens;
    } catch (err) {
      throw err;
    }
  },

  getItemByType: async (type) => {
    //Realiza uma busca por id
    try {
      //Busca no banco
      const ItemSelectedByType = await Item.findAll({
        where: {
            type: {
                [Op.like]: `%${type}%`
            }
        }
      });

      return ItemSelectedByType; //Retorna os itens do tipo buscado
    } catch (err) {
      throw err;
    }
  },

  getItemById: async (itemId) => {
    try {
      //Busca no banco
      const itemSelectedById = await Item.findByPk(itemId);

      if(itemSelectedById === null) throw new Error("O item não existe");

      return itemSelectedById; //Retorna apenas um item pelo id
    } catch (err) {
      throw err;
    }
  },

  createItem: async (itemObject) => {
    try {
      //Exibe uma mensagem de sucesso
      console.log("Connection has been established successfully.");

      //Criando e inserindo um novo item no banco
      const newItem = await Item.create({
        type: itemObject.type,
        description: itemObject.description,
        imagePath: itemObject.imagePath,
        value: itemObject.value,
      });

      return newItem.toJSON();
    } catch (err) {
      throw err;
    }
  },

  deleteItemById: async (id) => {
    //Realiza delete por id
    try {
      //Deleta no banco
      const itemDeletedById = await Item.destroy({
        where: {
          id: {
            [Op.eq]: id //Deleta apenas o valor do id equivalente
          },
        },
      });

      return itemDeletedById; //Retorna o usuario pelo nome
    } catch (err) {
      throw err;
    }
  }
};
