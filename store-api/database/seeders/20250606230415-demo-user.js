'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //Dados do seed
     await queryInterface.bulkInsert('User', [{
          legal_name: "ALMEIDA E FILHOS S.A.",
          trade_name: "ALMEIDA Soluções",
          cnpj: "98765432000198",
          username: "almeida",
          password: "@almeida2024",
          email: "contato@almeidasolucoes.com"
      },], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('User', null, {});
    
  }
};
