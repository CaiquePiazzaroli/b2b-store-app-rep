'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      // await queryInterface.bulkInsert('Item', [
      //   {
      //     name: "Galaxy S23",
      //     description: "Smartphone   full hd 4gb",
      //     value: 2400.99,
      //   },
      //   {
      //     name: "Monitor Samsung",
      //     description: "Monitor 4k Gamer",
      //     value: 5000.99,
      //   },
      //   {
      //     name: "Iphone 16e",
      //     description: "Iphone camera 4K",
      //     value: 3978.99,
      //   }
      // ], {});
    
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
