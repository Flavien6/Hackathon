'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class COMMANDE_LIGNE extends Model {
    static associate(models) {
      models.COMMANDE_LIGNE.belongsTo(models.PRODUIT_INFO, {
        foreignKey: {
          name: 'produit_id',
          allowNull: false
        }
      })
    }
  };
  COMMANDE_LIGNE.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    prix_unitaire: {
      allowNull: false,
      type: DataTypes.REAL
    },
    quantite: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'COMMANDE_LIGNE',
  });
  return COMMANDE_LIGNE;
};