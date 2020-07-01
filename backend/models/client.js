'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CLIENT extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CLIENT.init({
    id: DataTypes.INTEGER,
    prenom: DataTypes.STRING,
    nom: DataTypes.STRING,
    adresse: DataTypes.STRING,
    telephone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    limite_credit: DataTypes.INTEGER,
    gestionnaire_compte_id: DataTypes.STRING,
    date_naissance: DataTypes.DATE,
    sexe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CLIENT',
  });
  return CLIENT;
};