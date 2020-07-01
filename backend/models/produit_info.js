'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PRODUIT_INFO extends Model {
    static associate(models) {
      // define association here
    }
  };
  PRODUIT_INFO.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nom: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: DataTypes.STRING,
    categorie_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    poids: DataTypes.REAL,
    garantie_duree: DataTypes.STRING,
    fournisseur_id: DataTypes.INTEGER,
    produit_etat: {
      allowNull: false,
      type: DataTypes.STRING
    },
    prix_liste: {
      allowNull: false,
      type: DataTypes.REAL
    },
    prix_mini: DataTypes.REAL,
    url_catalogue: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PRODUIT_INFO',
  });
  return PRODUIT_INFO;
};