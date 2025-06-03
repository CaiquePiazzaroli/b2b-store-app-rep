'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Usuario', [{
       username: 'John Doe',
       password: '1234',
       type: 'Administrador',
       email: 'john@emai.com',
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuario', null, {});
  }
};
