'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class COMMANDE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  COMMANDE.init({
    id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    mode: DataTypes.STRING,
    client_id: DataTypes.INTEGER,
    etat: DataTypes.STRING,
    total: DataTypes.STRING,
    vendeur_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'COMMANDE',
  });
  return COMMANDE;
};