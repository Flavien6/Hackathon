'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class COMMANDE_LIGNE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  COMMANDE_LIGNE.init({
    id: DataTypes.INTEGER,
    produit_id: DataTypes.INTEGER,
    prix_unitaire: DataTypes.INTEGER,
    quantite: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'COMMANDE_LIGNE',
  });
  return COMMANDE_LIGNE;
};