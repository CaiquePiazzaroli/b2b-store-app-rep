const { error } = require("console");
const { Op } = require('sequelize');

const db = require("../database/models");
const { User } = db;

//Exportações
module.exports = {
  createUser: async (userObject) => {
    try {
      //Verifica se legal_name está em branco ou é nulo
      if (userObject.legal_name == null || userObject.legal_name == "") {
        throw error("legal_name nulo ou em branco");
      }

      //Criando e inserindo um novo usuário no banco
      const newUser = await User.create({
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
      //Busca no banco
      const allUsers = await User.findAll();

      //Retorna os usuarios
      return allUsers;
    } catch (err) {
      throw err;
    }
  },

  getUserById: async (id) => {
    //Realiza uma busca por id
    try {
      //Busca no banco
      const userSelectedById = await User.findAll({
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
      //Busca no banco
      const userSelectedByName = await User.findAll({
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
      //Deleta no banco
      const userDeletedById = await User.destroy({
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
