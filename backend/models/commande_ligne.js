"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class COMMANDE_LIGNE extends Model {
        static associate(models) {
            models.COMMANDE_LIGNE.removeAttribute("id");

            models.COMMANDE_LIGNE.belongsTo(models.PRODUIT_INFO, {
                foreignKey: {
                    name: "produit_id",
                    allowNull: false,
                    Primary_key: true,
                },
                //through: UserProjects
            });
            models.COMMANDE_LIGNE.belongsTo(models.COMMANDE, {
                foreignKey: {
                    name: "commande_id",
                    allowNull: false,
                    Primary_key: true,
                },
                //through: UserProjects
            });
        }
    }

    COMMANDE_LIGNE.init(
        {
            prix_unitaire: {
                allowNull: false,
                type: DataTypes.REAL,
            },
            quantite: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
        },
        {
            sequelize,
            modelName: "COMMANDE_LIGNE",
            onDelete: "cascade",
        }
    );

    /*sequelize.getQueryInterface().addConstraint('COMMANDE_LIGNE', {
    fields: ['produit_id', 'commande_id'],
    type: 'primary key',
    name: 'Primary_key'
  })*/

    return COMMANDE_LIGNE;
};
