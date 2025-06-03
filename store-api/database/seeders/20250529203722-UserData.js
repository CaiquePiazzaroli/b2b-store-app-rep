'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //  await queryInterface.bulkInsert('UserData', [
    //     {
    //       legal_name: "Jhon & Doe LTDA",
    //       trade_name: "TechInd",
    //       cnpj: "12345678000100",
    //       username: "jhond",
    //       password: "jhon97D0e",
    //       email:"jhon@email.com"
    //     }
    //  ], {});
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
