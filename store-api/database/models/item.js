'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      //Item.belongsToMany(models.Purchase, {through: models.PurchaseItemRelationship})
    }
  }

  Item.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    value: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Item',
  });

  return Item;
};