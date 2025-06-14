const path = require("path");
const { Sequelize } = require("sequelize");
const User = require("../database/models/user.js");
const { error } = require("console");
const { Op } = require('sequelize');

//Cria uma instância do banco de dados
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.resolve(__dirname, "../database/db.sqlite"), //__dirname variavel global que mostra a localização completa do arquivo atual
});

//Instancia o model passando a conexao do banco e o DataTypes
const UserModel = User(sequelize, Sequelize.DataTypes);

//Exportações
module.exports = {
  createUser: async (userObject) => {
    try {
      //Tenta se autenticar
      await sequelize.authenticate();

      //Exibe uma mensagem de sucesso
      console.log("Connection has been established successfully.");

      //Verifica se legal_name está em branco ou é nulo
      if (userObject.legal_name == null || userObject.legal_name == "") {
        throw error("legal_name nulo ou em branco");
      }

      //Criando e inserindo um novo usuário no banco
      const newUser = await UserModel.create({
        legal_name: userObject.legal_name,
        trade_name: userObject.trade_name,
        cnpj: userObject.cnpj,
        username: userObject.username,
        password: userObject.password,
        email: userObject.email,
      });

      return newUser.toJSON();
    } catch (err) {
      throw err;
    }
  },

  getAllUsers: async () => {
    try {
      //Tenta se autenticar
      await sequelize.authenticate();

      //Busca no banco
      const allUsers = await UserModel.findAll();

      //Retorna os usuarios
      return allUsers.toJSON();
    } catch (err) {
      throw err;
    }
  },

  getUserById: async (id) => {
    //Realiza uma busca por id
    try {
      //Tenta se autenticar
      await sequelize.authenticate();

      //Busca no banco
      const userSelectedById = await UserModel.findAll({
        where: {
          id: {
            [Op.eq]: id //Busca apenas o valor do id equivalente
          },
        },
      });

      console.log("Usuario buscado por id" + userSelectedById);

      return userSelectedById; //Retorna o usuario pelo nome
    } catch (err) {
      throw err;
    }
  },

  getUserByName: async (legalName) => {
    //Realiza uma busca por legal name de
    try {
      //Tenta se autenticar
      await sequelize.authenticate();

      //Busca no banco
      const userSelectedByName = await UserModel.findAll({
        where: {
          legal_name: {
            [Op.like]: `%${legalName}%` //Busca todos os valores que sejam compativeis com a string passada
          },
        },
      });

      return userSelectedByName; //Retorna o usuario pelo nome
    } catch (err) {
      throw err;
    }
  },

  deleteUserById: async (id) => {
    //Realiza delete por id
    try {
      //Tenta se autenticar
      await sequelize.authenticate();

      //Deleta no banco
      const userDeletedById = await UserModel.destroy({
        where: {
          id: {
            [Op.eq]: id //Deleta apenas o valor do id equivalente
          },
        },
      });

      console.log("Usuario buscado por id" + userDeletedById);

      return userDeletedById; //Retorna o usuario pelo nome
    } catch (err) {
      throw err;
    }
  }
};
