'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class INVENTAIRE extends Model {
    static associate(models) {
      models.INVENTAIRE.belongsTo(models.PRODUIT_INFO, {
        foreignKey: {
          name: 'produit_id',
          allowNull: false,
          primaryKey: true
        }
      })
      models.INVENTAIRE.belongsTo(models.ENTREPOT, {
        foreignKey: {
          name: 'entrepot_id',
          allowNull: false,
          primaryKey: true
        }
      })
    }
  }

  INVENTAIRE.init({
    quantite: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'INVENTAIRE',
    onDelete: 'cascade'
  })

  return INVENTAIRE
}