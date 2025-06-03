'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // async up (queryInterface, Sequelize) {
  //     await queryInterface.bulkInsert('PurchaseItemRelationship', [
  //       {
  //         id_purchase:1,
  //         id_item: 1,
  //         quantity: 2
  //       },
  //       {
  //         id_purchase:1,
  //         id_item: 2,
  //         quantity: 1
  //       },
  //       {
  //         id_purchase:1,
  //         id_item: 3,
  //         quantity: 1
  //       },
  //     ], {});
  // },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
