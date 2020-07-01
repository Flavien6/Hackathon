'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('COMMANDEs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      mode: {
        type: Sequelize.STRING
      },
      client_id: {
        type: Sequelize.INTEGER
      },
      etat: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.STRING
      },
      vendeur_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('COMMANDEs');
  }
};