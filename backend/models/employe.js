'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EMPLOYE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  EMPLOYE.init({
    id: DataTypes.INTEGER,
    prenom: DataTypes.STRING,
    nom: DataTypes.STRING,
    email: DataTypes.STRING,
    telephone: DataTypes.INTEGER,
    date_embauche: DataTypes.DATE,
    emploi_id: DataTypes.INTEGER,
    salaire: DataTypes.INTEGER,
    taux_commission: DataTypes.INTEGER,
    manager_id: DataTypes.INTEGER,
    departement_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EMPLOYE',
  });
  return EMPLOYE;
};