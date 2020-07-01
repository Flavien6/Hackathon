'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class DEPARTEMENT extends Model {
    static associate(models) {
      models.DEPARTEMENT.belongsTo(models.LOCALISATION, {
        foreignKey: {
          name: 'localisation_id',
          allowNull: false
        }
      })
    }
  }

  DEPARTEMENT.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nom: {
      allowNull: false,
      type: DataTypes.STRING
    },
    manager_d_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'DEPARTEMENT',
    onDelete: 'cascade'
  })

  return DEPARTEMENT
}