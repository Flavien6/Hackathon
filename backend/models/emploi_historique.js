'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EMPLOI_HISTORIQUE extends Model {
    static associate(models) {
      models.EMPLOI_HISTORIQUE.belongsTo(models.EMPLOYE, {
        foreignKey: {
          name: 'employe_id',
          allowNull: false,
          primaryKey: true
        }
      })
      models.EMPLOI_HISTORIQUE.belongsTo(models.EMPLOI, {
        foreignKey: {
          name: 'emploi_id',
          allowNull: false,
          primaryKey: true
        }
      })
      models.EMPLOI_HISTORIQUE.belongsTo(models.DEPARTEMENT, {
        foreignKey: {
          name: 'departement_id',
          allowNull: false,
          primaryKey: true
        }
      })
    }
  };
  EMPLOI_HISTORIQUE.init({
    date_debut: DataTypes.DATE,
    date_fin: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'EMPLOI_HISTORIQUE',
  });
  return EMPLOI_HISTORIQUE;
};