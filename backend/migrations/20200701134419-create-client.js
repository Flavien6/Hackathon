'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CLIENTs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      prenom: {
        type: Sequelize.STRING
      },
      nom: {
        type: Sequelize.STRING
      },
      adresse: {
        type: Sequelize.STRING
      },
      telephone: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      limite_credit: {
        type: Sequelize.INTEGER
      },
      gestionnaire_compte_id: {
        type: Sequelize.STRING
      },
      date_naissance: {
        type: Sequelize.DATE
      },
      sexe: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('CLIENTs');
  }
};