'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EMPLOYEs', {
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
      email: {
        type: Sequelize.STRING
      },
      telephone: {
        type: Sequelize.INTEGER
      },
      date_embauche: {
        type: Sequelize.DATE
      },
      emploi_id: {
        type: Sequelize.INTEGER
      },
      salaire: {
        type: Sequelize.INTEGER
      },
      taux_commission: {
        type: Sequelize.INTEGER
      },
      manager_id: {
        type: Sequelize.INTEGER
      },
      departement_id: {
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
    await queryInterface.dropTable('EMPLOYEs');
  }
};