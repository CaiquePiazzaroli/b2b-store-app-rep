'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsToMany(models.Order, {
        through: models.ItemOrder,  
        foreignKey: 'item_id',
        otherKey: 'order_id',
        as: 'orders'
      });
    }
  }
  Item.init({
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    imagePath: DataTypes.STRING,
    value: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Item',
    freezeTableName: true, //Impede de que o sequelize pluralize o nome da tabela
    timestamps: false       // <- desativa createdAt e updatedAt
  });
  return Item;
};