'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LOCALISATION extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  LOCALISATION.init({
    id: DataTypes.INTEGER,
    adresse: DataTypes.STRING,
    code_postal: DataTypes.INTEGER,
    ville: DataTypes.STRING,
    region_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LOCALISATION',
  });
  return LOCALISATION;
};