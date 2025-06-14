'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // As relações aqui nao precisam ser definidas pois ja foram definidas nas tabelas Order e Item
    }
  }
  item_order.init({
    order_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, { 
    sequelize,
    modelName: 'item_order',
    freezeTableName: true, //Impede de que o sequelize pluralize o nome da tabela
    timestamps: false      // <- desativa createdAt e updatedAt
  });
  return item_order;
};