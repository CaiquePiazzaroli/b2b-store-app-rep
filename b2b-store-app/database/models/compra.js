'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Compra extends Model {
    static associate(models) {
      Compra.belongsTo(models.DadosCliente); 
    }
  }
  Compra.init({
    dataCompra: DataTypes.DATE,
    total: DataTypes.FLOAT,
    idDadosCliente: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Compra',
  });
  return Compra;
};