'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserData extends Model {
    static associate(models) {
      // define association here
      UserData.hasMany(models.Purchase);
    }
  }
  
  UserData.init({
    lega_lName: DataTypes.STRING,
    trade_Name: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'UserData',
  });

  return UserData;
};