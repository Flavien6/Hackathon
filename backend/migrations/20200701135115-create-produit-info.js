'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PRODUIT_INFOs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      nom: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      categorie_id: {
        type: Sequelize.INTEGER
      },
      poids: {
        type: Sequelize.INTEGER
      },
      garantie_duree: {
        type: Sequelize.INTEGER
      },
      fournisseur_id: {
        type: Sequelize.INTEGER
      },
      produit_etat: {
        type: Sequelize.STRING
      },
      prix_liste: {
        type: Sequelize.INTEGER
      },
      prix_mini: {
        type: Sequelize.INTEGER
      },
      url_catalogue: {
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
    await queryInterface.dropTable('PRODUIT_INFOs');
  }
};