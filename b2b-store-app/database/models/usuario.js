'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      // define association here
      Usuario.hasOne(models.DadosCliente);
    }
  }
  Usuario.init({
    username: DataTypes.STRING, 
    password: DataTypes.STRING,
    type: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};