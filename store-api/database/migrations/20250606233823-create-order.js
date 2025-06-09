'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Order', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.STRING,
        //A prorpiedade references abaixo define uma relação de uma foreign key com a tabela user
        references: {
          model: {
            tableName: 'User',
            schema: 'schema',
          },
          key: 'id',
        }
      },
      order_date: {
        type: Sequelize.DATE
      },
      total: {
        type: Sequelize.FLOAT
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Order');
  }
};