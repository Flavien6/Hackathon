"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class ENTREPOT extends Model {
        static associate(models) {
            models.ENTREPOT.belongsTo(models.LOCALISATION, {
                foreignKey: {
                    name: "localisation_id",
                    allowNull: false,
                },
            });
        }
    }

    ENTREPOT.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            spec: DataTypes.STRING,
            nom: {
                allowNull: false,
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: "ENTREPOT",
            onDelete: "cascade",
        }
    );

    return ENTREPOT;
};
