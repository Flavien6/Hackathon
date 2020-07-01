'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LOCALISATION extends Model {
    static associate(models) {
      // define association here
    }
  };
  LOCALISATION.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    adresse: DataTypes.STRING,
    code_postal: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    ville: {
      allowNull: false,
      type: DataTypes.STRING
    },
    region_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LOCALISATION',
  });
  return LOCALISATION;
};