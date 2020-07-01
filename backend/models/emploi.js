'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EMPLOI extends Model {
    static associate(models) {
      // define association here
    }
  };
  EMPLOI.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    titre: {
      allowNull: false,
      type: DataTypes.STRING
    },
    salaire_min: DataTypes.REAL,
    salaire_max: DataTypes.REAL
  }, {
    sequelize,
    modelName: 'EMPLOI',
  });
  return EMPLOI;
};