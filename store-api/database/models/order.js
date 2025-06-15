'use strict';
const {
Model,
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey:'id_user',
        as:'user',
      });
      Order.belongsToMany(models.Item, {
        through: models.ItemOrder,
        foreignKey: 'order_id',
        otherKey: 'item_id',
        as: 'items'
      });
    }
  }
  Order.init({
    id_user: DataTypes.STRING,
    order_date: DataTypes.DATE,
    total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Order',
    freezeTableName: true, //Impede de que o sequelize pluralize o nome da tabela
    timestamps: false       // <- desativa createdAt e updatedAt
  });
  return Order;
};