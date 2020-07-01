'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EMPLOI_HISTORIQUE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  EMPLOI_HISTORIQUE.init({
    id: DataTypes.INTEGER,
    date_debut: DataTypes.DATE,
    date_fin: DataTypes.DATE,
    emploi_id: DataTypes.INTEGER,
    departement_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EMPLOI_HISTORIQUE',
  });
  return EMPLOI_HISTORIQUE;
};