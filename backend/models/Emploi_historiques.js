"use strict";

var db = require('../services/database').sql;
var queue = require('../services/queue');

var table = 'Emploi_historiques';
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
var Emploi_historiques = db.define(table, schemaObject, {
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

Emploi_historiques.associate = function (models) {
    // models.Emploi_historiques.belongsTo(models.toPop, { foreignKey: 'toPop', sourceKey: '_id' });
};

// Emploi_historiques.hasMany(Emploi_historiques, {foreignKey: 'toPop', sourceKey: '_id'});

// Adding hooks
Emploi_historiques.afterCreate(function(user, options) {
    // Indexing for search
    var ourDoc = user.dataValues;
    ourDoc.isSQL = true;
    ourDoc.model = table;

    // Dump it in the queue
    queue.create('searchIndex', ourDoc)
    .save();
});

Emploi_historiques.search = function(string){
    return Emploi_historiques.findAll({
        where: {
            tags: {
                $like: '%'+string
            }
        }
    });
};

Emploi_historiques.sync();

Emploi_historiques.transaction = db.transaction;

module.exports = Emploi_historiques;
// ToDo: Test transactions
