'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('UserData', [
        {
          id: 3,
          legal_name: "ALMEIDA E FILHOS S.A.",
          trade_name: "ALMEIDA Soluções",
          cnpj: "98765432000198",
          username: "almeida",
          password: "@almeida2024",
          email: "contato@almeidasolucoes.com"
        },
        {
          id: 4,
          legal_name: "TECH VISION LTDA",
          trade_name: "TechVision",
          cnpj: "10293847561029",
          username: "techvision",
          password: "Tv@2025vision",
          email: "suporte@techvision.com.br"
        },
        // {
        //   id: 5,
        //   legal_name: "BARROS COMÉRCIO DE PEÇAS",
        //   trade_name: "Barros Auto Peças",
        //   cnpj: "56473829104567",
        //   username: "barros",
        //   password: "Barros@auto22",
        //   email: "barrospecas@auto.com"
        // },
        // {
        //   id: 6,
        //   legal_name: "FERREIRA TECNOLOGIA ME",
        //   trade_name: "FerreiraTech",
        //   cnpj: "19283746556473",
        //   username: "ferreiratech",
        //   password: "Ferreira#123",
        //   email: "contato@ferreiratech.com"
        // },
        // {
        //   id: 7,
        //   legal_name: "OLIVEIRA IMPORTAÇÃO E EXPORTAÇÃO",
        //   trade_name: "Oliveira Comex",
        //   cnpj: "45678912345678",
        //   username: "oliveiracomex",
        //   password: "Oliveira!2025",
        //   email: "oliveira@comex.com.br"
        // }
     ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
