'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      // await queryInterface.bulkInsert('Purchase', [
      //     {
      //       id_user_data: 1,
      //       purchase_date: "2025-06-03",
      //       total: 599.9,
      //     }
      // ], {})
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
