'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class REGION extends Model {
    static associate(models) {
      models.REGION.belongsTo(models.SECTEUR, {
        foreignKey: {
          name: 'secteur_id',
          allowNull: false
        }
      })
    }
  }

  REGION.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nom: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'REGION',
    onDelete: 'cascade'
  })

  return REGION
}