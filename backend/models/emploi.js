'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EMPLOI extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  EMPLOI.init({
    id: DataTypes.INTEGER,
    titre: DataTypes.STRING,
    salaire_min: DataTypes.INTEGER,
    salaire_max: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EMPLOI',
  });
  return EMPLOI;
};