'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompraItemRelacao extends Model {
    
    static associate(models) {
      models.Compra.belongsToMany(models.Item, { through: CompraItemRelacao });
      models.Item.belongsToMany(models.Compra, { through: CompraItemRelacao });
    }
  }
  CompraItemRelacao.init({
    idCompra: DataTypes.UUID,
    idItem: DataTypes.UUID,
    quantidade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CompraItemRelacao',
  });
  return CompraItemRelacao;
};