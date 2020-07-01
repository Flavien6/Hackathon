"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class LOCALISATION extends Model {
        static associate(models) {
            models.LOCALISATION.belongsTo(models.REGION, {
                foreignKey: {
                    name: "region_id",
                    allowNull: false,
                },
            });
        }
    }

    LOCALISATION.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            adresse: DataTypes.STRING,
            code_postal: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            ville: {
                allowNull: false,
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: "LOCALISATION",
            onDelete: "cascade",
        }
    );

    return LOCALISATION;
};
