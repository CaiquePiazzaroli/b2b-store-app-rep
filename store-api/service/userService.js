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
  try {
    const userSelectedById = await User.findOne({
      where: { id },
    });

    console.log("Usuário buscado por ID:", userSelectedById);

    return userSelectedById;
  } catch (err) {
    console.error("Erro ao buscar usuário por ID:", err);
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
  },

  updateUser: async (userObject) => {
    try {
      const [rowsUpdated] = await User.update(
        {
          legal_name: userObject.legal_name,
          trade_name: userObject.trade_name,
          cnpj: userObject.cnpj,
          username: userObject.username,
          password: userObject.password,
          email: userObject.email,
        },
        {
          where: { id: userObject.id },
        }
      );

      if (rowsUpdated === 0) {
        throw new Error("Usuario não encontrado ou nenhum dado alterado");
      }

      // Buscar o item atualizado para retornar
      const updatedUser = await User.findByPk(userObject.id);
      return updatedUser.toJSON();
    } catch (err) {
      throw err;
    }
  },
};
