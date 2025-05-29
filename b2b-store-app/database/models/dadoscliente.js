'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DadosCliente extends Model {
    static associate(models) {
      // define association here
      DadosCliente.belongsTo(models.Usuario);
      DadosCliente.hasMany(models.Compra);
    }
  }
  DadosCliente.init({
    razaoSocial: DataTypes.STRING,
    fantasia: DataTypes.STRING,
    cnpj: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DadosCliente',
  });
  return DadosCliente;
};