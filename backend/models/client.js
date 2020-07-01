'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class CLIENT extends Model {
    static associate(models) {
      models.CLIENT.belongsTo(models.EMPLOYE, {
        foreignKey: {
          name: 'gestionnaire_compte_id',
          allowNull: false
        }
      })
    }
  }

  CLIENT.init({
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
    adresse: DataTypes.STRING,
    telephone: DataTypes.STRING,
    email: DataTypes.STRING,
    limite_credit: DataTypes.REAL,
    date_naissance: DataTypes.DATE,
    sexe: DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'CLIENT',
    onDelete: 'cascade'
  })

  return CLIENT
}