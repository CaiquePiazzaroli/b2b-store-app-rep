'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PurchaseItemRelationship extends Model {
    static associate(models) {
      models.Purchase.belongsToMany(models.Item, { through: PurchaseItemRelationship });
      models.Item.belongsToMany(models.Purchase, { through: PurchaseItemRelationship });
    }
  }

  PurchaseItemRelationship.init({
    id_purchase: DataTypes.UUID,
    id_item: DataTypes.UUID,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PurchaseItemRelationship',
  });


  return PurchaseItemRelationship;
};