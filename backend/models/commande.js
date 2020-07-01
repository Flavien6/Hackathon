'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class COMMANDE extends Model {
    static associate(models) {
      models.COMMANDE.belongsTo(models.CLIENT, {
        foreignKey: {
          name: 'client_id',
          allowNull: false
        }
      })
      models.COMMANDE.belongsTo(models.EMPLOyield, {
        foreignKey: {
          name: 'vendeur_id',
          allowNull: false
        }
      })
    }
  };
  COMMANDE.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    mode: {
      allowNull: false,
      type: DataTypes.STRING
    },
    etat: {
      allowNull: false,
      type: DataTypes.STRING
    },
    total: {
      allowNull: false,
      type: DataTypes.REAL
    }
  }, {
    sequelize,
    modelName: 'COMMANDE',
  });
  return COMMANDE;
};