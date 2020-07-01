"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class SECTEUR extends Model {
        static associate(models) {}
    }

    SECTEUR.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            nom: {
                allowNull: false,
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: "SECTEUR",
        }
    );

    return SECTEUR;
};
