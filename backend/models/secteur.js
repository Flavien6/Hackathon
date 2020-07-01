'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SECTEUR extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  SECTEUR.init({
    id: DataTypes.INTEGER,
    nom: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SECTEUR',
  });
  return SECTEUR;
};