"use strict";

var db = require('../services/database').sql;
var queue = require('../services/queue');

var table = 'Commande_lignes';
var debug = require('debug')(table);

// Define schema
var schemaObject = {
    // ++++++++++++++ Modify to your own schema ++++++++++++++++++
    name: {
        type: db._sequelize.STRING
    },
    someOtherStringData: {
        type: db._sequelize.STRING
    },
    toPop: {
        type: db._sequelize.INTEGER
    }
    // ++++++++++++++ Modify to your own schema ++++++++++++++++++
};


schemaObject.owner = {
    type: db._sequelize.STRING
};

schemaObject.createdBy = {
    type: db._sequelize.STRING
};

schemaObject.client = {
    type: db._sequelize.STRING
};

schemaObject.developer = {
    type: db._sequelize.STRING
};

schemaObject.tags = {
    type: db._sequelize.STRING
};

schemaObject._id = {
    type: db._sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
};


// Define the table
var Commande_lignes = db.define(table, schemaObject, {
    // Don't really delete data
    // paranoid: true,
    // define indexes here
    indexes:[{
        fields:['tags']
    },
    {
        unique: true,
        fields:['_id']
    }]
});

Commande_lignes.associate = function (models) {
    // models.Commande_lignes.belongsTo(models.toPop, { foreignKey: 'toPop', sourceKey: '_id' });
};

// Commande_lignes.hasMany(Commande_lignes, {foreignKey: 'toPop', sourceKey: '_id'});

// Adding hooks
Commande_lignes.afterCreate(function(user, options) {
    // Indexing for search
    var ourDoc = user.dataValues;
    ourDoc.isSQL = true;
    ourDoc.model = table;

    // Dump it in the queue
    queue.create('searchIndex', ourDoc)
    .save();
});

Commande_lignes.search = function(string){
    return Commande_lignes.findAll({
        where: {
            tags: {
                $like: '%'+string
            }
        }
    });
};

Commande_lignes.sync();

Commande_lignes.transaction = db.transaction;

module.exports = Commande_lignes;
// ToDo: Test transactions
