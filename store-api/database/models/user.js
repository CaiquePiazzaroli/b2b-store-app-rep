'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Order, {
        foreignKey: 'id_user',
        as: 'orders'
      });
    }
  }
  User.init({
    legal_name: DataTypes.STRING,
    trade_name: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    freezeTableName: true, //Impede de que o sequelize pluralize o nome da tabela
    timestamps: false       // <- desativa createdAt e updatedAt
  });
  return User;
};