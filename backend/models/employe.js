'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EMPLOYE extends Model {
    static associate(models) {
      models.EMPLOYE.belongsTo(models.EMPLOI, {
        foreignKey: {
          name: 'emploi_id',
          allowNull: false
        }
      })
      models.EMPLOYE.belongsTo(models.EMPLOYE, {
        foreignKey: {
          name: 'manager_id',
          allowNull: false
        }
      })
      models.EMPLOYE.belongsTo(models.DEPARTEMENT, {
        foreignKey: {
          name: 'departement_id',
          allowNull: false
        }
      })
    }
  };
  EMPLOYE.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    prenom: {
      allowNull: false,
      type: DataTypes.STRING
    },
    nom: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: DataTypes.STRING,
    telephone: DataTypes.STRING,
    date_embauche: {
      allowNull: false,
      type: DataTypes.DATE
    },
    salaire: {
      allowNull: false,
      type: DataTypes.REAL
    },
    taux_commission: DataTypes.REAL,
  }, {
    sequelize,
    modelName: 'EMPLOYE',
  });
  return EMPLOYE;
};