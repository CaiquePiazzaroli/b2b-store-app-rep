const path = require("path");
const { Sequelize, where } = require("sequelize");
const Item = require("../database/models/itens.js");
const { Op } = require('sequelize');

//Cria uma instância do banco de dados
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.resolve(__dirname, "../database/db.sqlite"), //__dirname variavel global que mostra a localização completa do arquivo atual
});

//Instancia o model passando a conexao do banco e o DataTypes
const ItemModel = Item(sequelize, Sequelize.DataTypes);

//Exportações
module.exports = {
  getAllItens: async () => {
    try {
      //Tenta se autenticar
      await sequelize.authenticate();

      //Busca no banco
      const allItens = await ItemModel.findAll();

      //Retorna os usuarios
      return allItens;
    } catch (err) {
      throw err;
    }
  },

  getItemByType: async (type) => {
    //Realiza uma busca por id
    try {
      //Tenta se autenticar
      await sequelize.authenticate();

      //Busca no banco
      const ItemSelectedByType = await ItemModel.findAll({
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
      //Tenta se autenticar
      await sequelize.authenticate();

      //Busca no banco
      const itemSelectedById = await ItemModel.findByPk(itemId);

      if(orderSelectedById === null) throw new Error("O item não existe");

      return itemSelectedById; //Retorna apenas um item pelo id
    } catch (err) {
      throw err;
    }
  },

  createItem: async (itemObject) => {
    try {
      //Tenta se autenticar
      await sequelize.authenticate();

      //Exibe uma mensagem de sucesso
      console.log("Connection has been established successfully.");

      //Criando e inserindo um novo item no banco
      const newItem = await ItemModel.create({
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
      //Tenta se autenticar
      await sequelize.authenticate();

      //Deleta no banco
      const itemDeletedById = await ItemModel.destroy({
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
