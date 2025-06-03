'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Purchase extends Model {
    static associate(models) {
      Purchase.belongsTo(models.UserData); 
    }
  }

  Purchase.init({
    purchase_date: DataTypes.DATE,
    total: DataTypes.FLOAT,
    id_data_user: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Purchase',
  });

  return Purchase;
};